FROM node:slim
WORKDIR /usr/src/app
COPY ./commands /usr/src/app/commands
COPY ./package.json /usr/src/app/package.json
COPY ./db.config.js /usr/src/app/db.config.js
COPY ./main.js /usr/src/app/main.js
RUN npm install
EXPOSE 8080
CMD [ "node", "main.js" ]