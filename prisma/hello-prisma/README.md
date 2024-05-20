# Quickstart #

<https://www.prisma.io/docs/getting-started/quickstart>

``` shell
npm init -y
npm install typescript ts-node @types/node --save-dev

npx tsc --init

npm install prisma --save-dev

npx prisma init --datasource-provider sqlite

npx prisma migrate dev --name init
```
