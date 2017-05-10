// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

const fs = require('fs-extra');
const path = require('path');
var webpack = require('webpack');
var config = require('../config/webpack.config.electron');
const paths = require('../config/paths');
const packager = require('electron-packager');

// Copy electronMain and package.json to the build directory
fs.copySync(paths.appPackageJson, path.join(paths.appBuild, 'package.json'), {
  dereference: true
});
fs.copySync(
  path.join(paths.serverDir, 'callback.html'),
  path.join(paths.appBuild, 'callback.html'), {
    dereference: true
  });

webpack(config).run((err, stats) => {
  if (err) {
    console.log('Failed to compose', [err]);
    process.exit(1);
  }

  packager({
    dir: paths.appBuild,
    asar: false,
    overwrite: true,
  }, (error, appPaths) => {
    console.log('omg!!!', appPaths);
  });
});

