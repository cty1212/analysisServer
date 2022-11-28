FROM node:16-alpine
WORKDIR /code
ADD . /code
RUN npm install -g pm2 --registry=https://registry.npm.taobao.org && npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000
CMD npm run prd