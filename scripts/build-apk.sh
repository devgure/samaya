# scripts/build-apk.sh
#!/bin/bash
cd mobile
npx expo build:android -t apk
echo "APK build started. Download from Expo dashboard."