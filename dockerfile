FROM node:10.13.0-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .


ENV PORT=5000

EXPOSE ${PORT}

CMD [ "npm", "run", "prod" ]