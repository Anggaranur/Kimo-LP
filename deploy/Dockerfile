# Build Stage
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# Production Stage
FROM node:latest as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app/dist
EXPOSE 80  
CMD ["node", "/app/dist/server.js"]