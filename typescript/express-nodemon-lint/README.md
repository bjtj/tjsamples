# Setup node project with express, typescript and test from scratch #

<https://sipsandbits.com/2022/02/25/setup-node-project-with-express-typescript-and-test-from-scratch/>

```shell
npm init -y
npm i -S express
npm i -D typescript eslint@7.32 prettier husky ts-node tsconfig-paths eslint-config-prettier lint-staged eslint-plugin-prettier eslint-import-resolver-typescript @types/express nodemon
npx eslint --init
npx tsc --init
npm i -D mocha chai supertest @types/mocha @types/chai @types/supertest
```
