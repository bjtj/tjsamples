FROM node:16.14.2

WORKDIR /workspace
COPY ["./package.json", "./package-lock.json", "./app.js", "./"]
RUN npm i
ENTRYPOINT ["node", "app.js"]
