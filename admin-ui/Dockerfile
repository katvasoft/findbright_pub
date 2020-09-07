FROM node:10-buster
WORKDIR /app
ADD package* /app/
RUN npm install --no-audit
ADD ./ /app/
RUN npm run build
RUN ls -la /app/dist/Findbright

FROM iamfreee/docker-nginx-static-spa:latest
COPY --from=0 /app/dist/Findbright/* /var/www/html/
