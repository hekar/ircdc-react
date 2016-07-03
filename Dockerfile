FROM node:5

MAINTAINER Hekar Khani

RUN npm install
ENTRYPOINT ["npm", "start"]

