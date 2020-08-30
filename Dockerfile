### STAGE 1 - builder ###
FROM node:14.9-alpine AS builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 1 - final ###
FROM nginx:1.18.0
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist/waffle-air /usr/share/nginx/html
