FROM node:alpine
WORKDIR /app
COPY package.json /app

curl https://gist.githubusercontent.com/machooper/91ce3aafbd3e758e8fe87464c8ed6d74/raw/918a8767abc591e0751dee9000ee20012d016466/.zshrc > ~/.profile
curl https://gist.githubusercontent.com/machooper/cab253411bdbba7757767359bd6606d4/raw/9e5a327d679ad47408f08ab91f24c4f2fbd0e7c4/vimscript.sh > ~/.vimscript.sh;

RUN apk add vim curl git openssh
RUN ssh-keygen -b 2048 -t rsa -f ~/.ssh/id_rsa
RUN eval "$(ssh-agent -s)"
RUN chmod +x ~/.vimscript.sh; ~/.vimscript.sh
RUN npm install;
RUN git config --global user.name "Mac Develops"; git config --global user.email "65713232+machooper@users.noreply.github.com"

COPY . /app
CMD npm run dev
EXPOSE 3000
