const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const PORT = process.env.PORT || 5000;

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
