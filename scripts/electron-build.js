// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

const fs = require('fs-extra');
const path = require('path');
const webpack = require('webpack');
const config = require('../config/webpack.config.electron');
const paths = require('../config/paths');
const builder = require('electron-builder');
const platform = builder.Platform;

// Copy electronMain and package.json to the build directory
fs.copySync(paths.appPackageJson, path.join(paths.appBuild, 'package.json'), {
  dereference: true,
});
// prettier-ignore
fs.copySync(
  path.join(paths.serverDir, 'callback.html'),
  path.join(paths.appBuild, 'callback.html'),
  {
    dereference: true,
  }
);
// prettier-ignore
fs.copySync(
  paths.appElectronMain,
  path.join(paths.appBuild, 'src/electronMain.js')
);
// prettier-ignore
fs.copySync(
  path.join(paths.appSrc, 'electron'),
  path.join(paths.appBuild, 'src/electron')
);
fs.copySync(paths.serverDir, path.join(paths.appBuild, 'server'));
fs.copySync(paths.appNodeModules, path.join(paths.appBuild, 'node_modules'));

builder.build({
  targets: platform.MAC.createTarget(),
  config: {
    publish: [
      {
        provider: 'github',
        owner: 'niekert',
        repo: 'soundify',
      },
    ],
    appId: 'com.electron.soundify',
    productName: 'Soundify',
    directories: {
      buildResources: 'build/',
      app: 'build',
      output: 'dist',
    },
  },
});
