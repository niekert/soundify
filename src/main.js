const { app, BrowserWindow } = require('electron');
const path = require('path');
const server = require('../server');
const electronIsDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  server();
  const port = process.env.PORT || 3000; // Default to port 3000

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    experimentalFeatures: true,
    webPreferences: {
      experimentalFeatures: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(
    electronIsDev
      ? `http://localhost:${port}` // Dev server ran by react-scripts
      : `file://${path.join(__dirname, '../build', 'index.html')}` // Bundled application
  );

  // Do special things on development
  if (electronIsDev) {
    mainWindow.webContents.openDevTools();
  }
}

app.on('ready', createWindow);
