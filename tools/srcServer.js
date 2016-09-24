import express from 'express';
import webpack from 'webpack';
import middleware_dev from 'webpack-dev-middleware';
import middleware_hot from 'webpack-hot-middleware';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(middleware_dev(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(middleware_hot(compiler));

// We point to our static assets
let assetPath = path.join( __dirname, '../assets');
app.use("/assets", express.static(assetPath));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
