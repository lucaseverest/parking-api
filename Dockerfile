# used to tell Docker which image to use as a base image.
FROM node:latest

#is the directory where the commands will be executed
WORKDIR /app
# is used to copy the package.json and package-lock.json files to the /app directory
COPY package*.json ./
# is used to install the dependencies.
RUN npm install
# is used to copy all the files from the current directory to the /app directory.
COPY . .
# is used to build the application.
RUN npm run build
# is used to expose the port 3000 to the host.
EXPOSE 3000
# is used to execute a command when the container is started
CMD ["npm", "run", "start:prod"]