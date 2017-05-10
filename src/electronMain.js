const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
const server = require('../server');
const electronIsDev = require('electron-is-dev');

let mainWindow;

function registerShortcuts(window) {
  globalShortcut.register('medianexttrack', () => {
    window.webContents.send('mediaKeys', 'next');
  });

  globalShortcut.register('mediaplaypause', () => {
    window.webContents.send('mediaKeys', 'play_pause');
  });

  globalShortcut.register('mediaprevioustrack', () => {
    window.webContents.send('mediaKeys', 'prev');
  });
}

function createWindow() {
  server(); // Start a simple express server for the soundcloud API callback

  const port = process.env.PORT || 3000; // Default to port 3000
  const windowSize = { // TODO: Save this
    width: 1100,
    height: 900,
  };

  if (electronIsDev) {
    windowSize.width = 1900;
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: windowSize.width,
    height: windowSize.height,
    experimentalFeatures: true,
    titleBarStyle: 'hidden-inset',
    webPreferences: {
      experimentalFeatures: true,
    },
  });

  mainWindow.loadURL(
    electronIsDev
      ? `http://localhost:${port}` // Dev server ran by react-scripts
      : `file://${path.join(__dirname, '../index.html')}` // eslint-disable-line
  );

  // Do special things on development
  if (electronIsDev) {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS,
    } = require('electron-devtools-installer');

    installExtension(REACT_DEVELOPER_TOOLS);
    installExtension(REDUX_DEVTOOLS);
    mainWindow.webContents.openDevTools();
  }

  registerShortcuts(mainWindow);
}

app.on('ready', createWindow);
