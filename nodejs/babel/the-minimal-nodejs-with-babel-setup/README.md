# The minimal Node.js with Babel Setup #

https://www.robinwieruch.de/minimal-node-js-babel-setup#nodejs-with-nodemon

```
npm install nodemon --save-dev
```

**nodemon**

https://github.com/remy/nodemon

> nodemon is a tool that helps develop node.js based applications by **automatically restarting the node application when file changes** in the directory are detected.


```
npm install @babel/core @babel/node --save-dev
```

for .babelrc

```
npm install @babel/preset-env --save-dev
```

.babelrc

```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

for .env

```
npm install dotenv --save
```

