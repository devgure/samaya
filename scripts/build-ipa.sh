# scripts/build-ipa.sh
#!/bin/bash
cd mobile
npx expo build:ios
echo "IPA build started. Download from Expo dashboard."