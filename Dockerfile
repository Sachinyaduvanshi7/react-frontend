# Base image - Use Node 20
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000 for development server
EXPOSE 3000

# Start React app in development mode
CMD ["npm", "start"]
