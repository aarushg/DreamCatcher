# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Expose necessary ports for Expo
EXPOSE 19000 19001 19002

# Start the app with Expo
CMD ["npx", "expo", "start", "-c"]

