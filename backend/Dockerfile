#Instala la version del node
FROM node:10
#Creo una carpeta
RUN mkdir -p /usr/src/app/server

WORKDIR /usr/src/app/server

COPY package*.json /usr/src/app/server/

RUN npm install

COPY . /usr/src/app/server

CMD ["npm", "start"]