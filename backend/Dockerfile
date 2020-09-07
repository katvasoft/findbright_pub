FROM node:12-buster
EXPOSE 3000
WORKDIR /app
ADD package* /app/
RUN npm install --no-audit
ADD ./ /app/
RUN npm run build
CMD npm run run
