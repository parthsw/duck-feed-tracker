# Using another docker image for the image template
FROM node:12

# Create an app directory
WORKDIR /usr/src/app

# Copying the package.json file to the created directory
# A wild card is used to ensure both package.json and package-lock.json are copied, if available.
COPY package*.json ./

# Installing the app dependencies & building code for production
# RUN npm ci --only=production
RUN npm install

# Copying application content to the newly created directory
COPY . .

# Exposing a port 3000 to the outside once the container has launched
EXPOSE 3000

# Running the Node.js server during the launch of docker image
CMD npm run prod
