const webpack = require('webpack');
const paths = require('./paths');

module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  target: 'electron-main',
  devtool: 'source-map',
  entry: [
    paths.appElectronMain
  ],
  output: {
    // The build folder.
    path: paths.appBuild,
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'src/electronMain.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },

      mangle: {
        screw_ie8: true
      },

      output: {
        comments: false,
        screw_ie8: true
      },

      sourceMap: true,
    }), // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
  ],
};
