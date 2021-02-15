FROM node:alpine
WORKDIR /app
COPY package.json /app
RUN apk add vim curl git
RUN curl https://gist.githubusercontent.com/machooper/9b1afc7b954508d9ecb45033d4fb5c40/raw/8e3ddb91da550bd38afb98078e55af6a63a041ed/.vimrc > ~/.vimrc
RUN npm install; apk del curl; rm -rf readme.md;
COPY . /app
CMD npm run dev
EXPOSE 3000

