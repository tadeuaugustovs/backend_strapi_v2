# Dockerfile
FROM node:18

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV=development
EXPOSE 1337

CMD ["npm", "run", "develop"]
