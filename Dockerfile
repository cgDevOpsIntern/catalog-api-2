FROM node:current-alpine
RUN mkdir -p /usr/src/app/ && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
COPY [ "package.json", "package-lock.json*", "./" ]

RUN npm install 
COPY . .
RUN rm Dockerfile