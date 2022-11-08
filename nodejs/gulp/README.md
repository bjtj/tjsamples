# gulp #

<https://gulpjs.com/>

A toolkit to automate & enhance your workflow


# Quick Start #

<https://gulpjs.com/docs/en/getting-started/quick-start>


```shell
npm install --global gulp-cli
```

## Create a project directory and navigate into it ##

```shell
npx mkdirp my-project
cd my-project
```

## Create a package.json file in your project directory ##

```shell
npm init
```

## Install the gulp package in your devDependencies ##

```shell
npm install --save-dev gulp
```

## Create a gulpfile# ##

```js
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
```

## Test it ##

```shell
gulp
```
