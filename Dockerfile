FROM node:alpine
WORKDIR /app
COPY package.json /app

RUN apk add vim curl git openssh

RUN ssh-keygen -b 2048 -t rsa -f ~/.ssh/id_rsa
RUN eval "$(ssh-agent -s)"

<<<<<<< HEAD
RUN curl https://gist.githubusercontent.com/machooper/cab253411bdbba7757767359bd6606d4/raw/25f8b296f659693ccb1628be85cf542bdda44dc6/vimscript.sh > ~/.vimscript.sh;

RUN chmod +x ~/.vimscript.sh; ~/.vimscript.sh;

RUN npm install; rm -rf readme.md;
=======
RUN curl https://gist.githubusercontent.com/machooper/cab253411bdbba7757767359bd6606d4/raw/dd493f4713ed2a6529b6e5ed1cfa1b1652800f1b/vimscript.sh > ~/vim.sh; chmod +x ~/vim.sh; ~/vim.sh;

RUN npm install; apk del curl;
>>>>>>> d64de1dfb996f297480fa2759378be18d64d1b47

RUN git config --global user.name "Mac Develops"; git config --global user.email "65713232+machooper@users.noreply.github.com"

COPY . /app
CMD npm run dev
EXPOSE 3000
<<<<<<< HEAD
=======

>>>>>>> d64de1dfb996f297480fa2759378be18d64d1b47
