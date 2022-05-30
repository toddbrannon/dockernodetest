Docker file contents:

FROM node:9-slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]

Build command:
docker build -t dockernodetest .
NOTE: 'dockernodetest' is the image name specific to this project 

Spin up a container:
docker run --name dockernodetest -p 9999:3000 dockernodetest

Run the docker container in the background:
docker run -d -p 9999:3000 docker-node-test