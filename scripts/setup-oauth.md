# 🔐 OAuth Setup Guide

## Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project → APIs & Services → Credentials
3. Create OAuth 2.0 Client ID
   - Web: `http://localhost:3000/api/auth/google/callback`
   - Android/iOS: Configure package name
4. Save `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `.env`

## Apple OAuth

1. Go to [Apple Developer](https://developer.apple.com/account/)
2. Create an App ID and enable "Sign in with Apple"
3. Create a Service ID with return URL: `https://yourdomain.com/auth/apple/callback`
4. Generate a private key (p8 file)
5. Save:
   - `APPLE_CLIENT_ID`
   - `APPLE_TEAM_ID`
   - `APPLE_KEY_ID`
   - `APPLE_PRIVATE_KEY` (p8 content)