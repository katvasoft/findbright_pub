FROM node:12-buster
WORKDIR /app
EXPOSE 4200
ADD package* /app/
RUN npm ci
