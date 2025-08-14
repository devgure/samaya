// src/payment/stripe.webhook.controller.ts
import { Controller, Post, RawBodyRequest, Req } from '@nestjs/common';
import { Request } from 'express';
import * as Stripe from 'stripe';
import { PaymentService } from './payment.service';

@Controller('webhook')
export class StripeWebhookController {
  constructor(private paymentService: PaymentService) {}

  @Post('stripe')
  async handleWebhook(@Req() req: RawBodyRequest<Request>) {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event: Stripe.Event;
    try {
      event = Stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
    } catch (err) {
      console.log(`Webhook signature verification failed.`, err.message);
      throw new Error('Webhook Error');
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      await this.paymentService.handleCheckoutSession(session);
    }

    if (event.type === 'customer.subscription.deleted') {
      const sub = event.data.object as Stripe.Subscription;
      await this.paymentService.cancelSubscription(sub.id);
    }

    return { received: true };
  }
}