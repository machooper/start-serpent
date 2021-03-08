FROM node:alpine
WORKDIR /app
COPY package.json /app

RUN apk add vim curl git openssh

RUN ssh-keygen -b 2048 -t rsa -f ~/.ssh/id_rsa
RUN eval "$(ssh-agent -s)"

RUN curl https://gist.githubusercontent.com/machooper/cab253411bdbba7757767359bd6606d4/raw/25f8b296f659693ccb1628be85cf542bdda44dc6/vimscript.sh > ~/.vimscript.sh;

RUN chmod +x ~/.vimscript.sh; ~/.vimscript.sh;

RUN npm install; rm -rf readme.md;

RUN git config --global user.name "Mac Develops"; git config --global user.email "65713232+machooper@users.noreply.github.com"

COPY . /app
CMD npm run dev
EXPOSE 3000
