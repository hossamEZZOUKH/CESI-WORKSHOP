# Use the official Node.js base image
FROM node:16

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /usr/src/app

# Copy the package files
COPY package.json ./

# Install dependencies, including Vite globally
RUN pnpm install 

# Expose the port used by Vite.js, which is 5173 by default
EXPOSE 5173

# Start the Vite development server
CMD ["pnpm", "run", "dev"]
