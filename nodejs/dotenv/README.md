# dotenv #

<https://www.npmjs.com/package/dotenv>


e.g.) default value

```shell
$ npm run start

> dotenv@1.0.0 start
> node index.js

MYVALUE: my-default
```

e.g.) environment

```shell
$ MYVALUE=x npm run start

> dotenv@1.0.0 start
> node index.js

MYVALUE: x
```

e.g.) .env file

```shell
$ npm run start

> dotenv@1.0.0 start
> node index.js

MYVALUE: myvalue in .env
```
