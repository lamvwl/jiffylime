FROM node:12
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm i -g @vue/cli

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "serve" ]
