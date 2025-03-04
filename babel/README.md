# The minimal Node.js with Babel Setup #

https://www.robinwieruch.de/minimal-node-js-babel-setup



# Usage Guide #

https://babeljs.io/docs/en/usage

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```


```
./node_modules/.bin/babel src --out-dir lib
```

> You can use the npm package runner that comes with npm@5.2.0 to shorten that command by replacing `./node_modules/.bin/babel` with `npx babel`



# Configure Babel #

https://babeljs.io/docs/en/configuration

## What's your use case? ##


* You want to programmatically create the configuration?
* You want to compile node_modules?

    > `babel.config.js` is for you!

* You have a static configuration that only applies to your simple single package?

    > `.babelrc` is for you!

* The Guy Fieri is your hero?

    > We recommend to use the `babel.config.js` format. Babel itself is using it.


## Config Files ##

https://babeljs.io/docs/en/config-files

* Project-wide configuration
* File-relative configuration
  * `.babelrc` (and `.babelrc.js` or `.babelrc.cjs`) files
  * `package.json` files with a `"babel"` key


# Support for the experimental syntax 'classProperties' #

https://github.com/babel/babel/issues/8655#issuecomment-419808044

```
...
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
  },
...
```

## @babel/plugin-proposal-class-properties ##

https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

```
npm install --save-dev @babel/plugin-proposal-class-properties
```

# Support for the experimental syntax ‘decorators-legacy’ isn’t currently enabled #

https://medium.com/@patrickjbradley/support-for-the-experimental-syntax-decorators-legacy-isn-t-currently-enabled-f69206bade39

```
yarn add @babel/plugin-proposal-decorators
```

or

```
npm install @babel/plugin-proposal-decorators --save-dev
```

`babel.config.js` file `plugins` section

```
[
   require(‘@babel/plugin-proposal-decorators’).default,
   {
      legacy: true
   }
],
```

# Cannot find module 'core-js/modules/web.dom.iterable' #

https://github.com/zloirock/core-js/issues/500#issuecomment-474685350

```
useBuiltIns: 'usage' //Remove this line of code to solve the problem 
```
