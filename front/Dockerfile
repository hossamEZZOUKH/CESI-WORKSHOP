# Use the official Node.js base image
FROM node:16

# Install pnpm
RUN npm install -g pnpm && npm install -g vite

# Set the working directory
WORKDIR /usr/src/app

# Copy the package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies, including Vite globally
RUN pnpm install 

# Copy the rest of your source code
COPY . .

# Expose the port used by Vite.js, which is 5173 by default
EXPOSE 5173

# Start the Vite development server
CMD ["pnpm", "run", "dev"]
