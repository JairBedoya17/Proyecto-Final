#Instala la version del node
FROM node:10
#Creo una carpeta
RUN mkdir -p /usr/src/app/client

WORKDIR /usr/src/app/client

COPY package*.json /usr/src/app/client/

RUN npm install

COPY . /usr/src/app/client

CMD ["npm", "run", "dev"]