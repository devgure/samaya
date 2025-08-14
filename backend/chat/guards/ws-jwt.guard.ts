// backend/chat/guards/ws-jwt.guard.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WebSocketGateway } from '@nestjs/websockets';

@Injectable()
export class WsJwtGuard {
  constructor(private jwtService: JwtService) {}

  canActivate(client: any): boolean {
    const token = client.handshake.headers.authorization?.split(' ')[1];
    try {
      const payload = this.jwtService.verify(token);
      client.user = payload;
      return true;
    } catch {
      return false;
    }
  }
}