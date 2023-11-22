FROM node:16-bullseye
WORKDIR /usr/local/stocks

COPY package.json .
COPY package-lock.json .

RUN mkdir node_modules
RUN npm ci

EXPOSE 5001

COPY tsconfig.json .
CMD ["npm", "run", "dev"]