FROM node:16-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install
# Expose port
EXPOSE 3002
# Start the app
CMD [ "npm", "run", "app"]