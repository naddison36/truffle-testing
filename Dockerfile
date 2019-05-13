FROM node:8

WORKDIR /usr/src/app

RUN npm install truffle -g
RUN truffle unbox metacoin
RUN npm install -D truffle-hdwallet-provider

COPY truffle-config.js .
