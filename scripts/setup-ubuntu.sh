# scripts/setup-ubuntu.sh
#!/bin/bash
echo "Setting up Ubuntu 22.04 for LoveLink..."

sudo apt update
sudo apt install -y docker.io docker-compose nodejs npm python3 python3-pip nginx git

sudo usermod -aG docker $USER
echo "Docker installed. Reboot or run: newgrp docker"

npm install -g expo-cli @nestjs/cli

pip3 install -r ai_service/requirements.txt

echo "Setup complete! Run: docker-compose up --build"