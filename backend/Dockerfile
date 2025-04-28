# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy backend source code
COPY . .

# Expose backend port
EXPOSE 5000

# Command to run backend
CMD ["npm", "start"]
