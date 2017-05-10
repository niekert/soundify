const { app, BrowserWindow } = require('electron');
const path = require('path');
const server = require('../server');
const electronIsDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  server(); // Start a simple express server for the soundcloud API callback

  const port = process.env.PORT || 3000; // Default to port 3000

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 900,
    experimentalFeatures: true,
    titleBarStyle: 'hidden-inset',
    webPreferences: {
      experimentalFeatures: true,
    },
  });

  mainWindow.loadURL(
    electronIsDev
      ? `http://localhost:${port}` // Dev server ran by react-scripts
      : `file://${path.join(__dirname, '../build', 'index.html')}` // eslint-disable-line Bundled application
  );

  // Do special things on development
  if (electronIsDev) {
    mainWindow.webContents.openDevTools();
  }
}

app.on('ready', createWindow);
