# mochajs #

https://mochajs.org

globally

```
npm install --global mocha
```

development dependency

```
npm install --save-dev mocha
```

## Unexpected token while using mocha + @babel/register #8477 ##

https://github.com/babel/babel/issues/8477

위 링크는 안되고 아래 링크가 작동했음

https://github.com/mochajs/mocha/issues/3964#issuecomment-511223658


## configuring mocha (node.js) ##

https://mochajs.org/#configuring-mocha-nodejs


**javascript**

* `.mocharc.js`

**json**

* `.mocharc.json` (or `.mocharc.jsonc`)

**yaml**

* `mocharc.yaml` (or `.mocharc.yml`)

**package.json**

Create a `mocha` property in your project's `package.json`.


### Config Examples ###

https://github.com/mochajs/mocha/tree/master/example/config

mocha 예제 config 파일들
