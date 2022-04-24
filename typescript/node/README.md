# Migrating from JavaScript #

<https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html>

## Writing a Configuration File ##

tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./built",
    "allowJs": true,
    "target": "es5"
  },
  "include": ["./src/**/*"]
}
```


# Node.js with TypeScript #

<https://nodejs.dev/learn/nodejs-with-typescript>

install:

```shell
npm i -D typescript
```

compile:

```shell
npx tsc src/main.ts
```

compile using tsconfig.json:

```shell
npx tsc
```
