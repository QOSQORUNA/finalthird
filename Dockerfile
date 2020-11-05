FROM node:stretch-slim 
#create app directory
WORKDIR /usr/src/app/ms-third
COPY package.json .
RUN npm install
COPY .  .
EXPOSE 8082
CMD ["npm" , "start"]