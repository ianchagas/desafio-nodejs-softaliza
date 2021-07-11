FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5000

CMD ["yarn", "dev"]