# mobile/Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 19000-19006
CMD ["npx", "expo", "start", "--tunnel"]