/* eslint-disable */
const path = require('path');
const express = require('express');

module.exports = function (port) {
  debugger;
  const app = express();

  app.get('/callback', function (req, res) {
    res.sendFile(path.join(__dirname, 'callback.html'));
  });

  app.listen(port || 8080); // TODO: configurable

  return app;
}
