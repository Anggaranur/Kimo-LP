# Build Stage
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# Production Stage
FROM node:alpine as production-stage
WORKDIR /app

EXPOSE 3000  
# CMD ["node", "/app/dist/server.js"]