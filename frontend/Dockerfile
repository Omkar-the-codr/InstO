# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build the frontend
RUN npm run build

# Serve using a simple web server
RUN npm install -g serve

# Expose port (frontend will run on 3000 or any you want)
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
