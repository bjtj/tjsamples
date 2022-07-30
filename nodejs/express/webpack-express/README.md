## Setting up HtmlWebpackPlugin ##

<https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin>


```bash
npm install --save-dev html-webpack-plugin
```


## Using webpack-dev-middleware ##

<https://webpack.js.org/guides/development/#using-webpack-dev-middleware>


webpack.config.js

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,

+   publicPath: '/',
  },
};
```
