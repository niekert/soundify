/* eslint-disable */
const path = require('path');
const electronIsDev = require('electron-is-dev');
const express = require('express');

module.exports = function (port) {
  const app = express();

  app.get('/callback', function (req, res) {
    res.sendFile(
      electronIsDev ?
        path.join(__dirname, 'callback.html') :
        path.join(__dirname, '../callback.html') // TODO: It's ugly but it works. gotta fix this though
    );
  });

  app.listen(port || 8080); // TODO: configurable. But it's soundcloud limited

  return app;
}
