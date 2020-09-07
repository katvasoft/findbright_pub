FROM node:12-buster
WORKDIR /app
EXPOSE 3000
ADD package* /app/
RUN npm ci
ADD src /app/src/
ADD nodemon.json /app
ADD tsconfig.json /app
ADD ormconfig.js /app
 