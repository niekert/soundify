const { app, BrowserWindow, globalShortcut, Menu } = require('electron');
const Store = require('electron-store');
const path = require('path');
const server = require('../server');
const menuTemplate = require('./electron/menuTemplate');
const electronIsDev = require('electron-is-dev');

// TODO: maybe move to own file
const defaultStoreState = {
  bounds: {
    width: 1100,
    height: 900,
  },
};

const store = new Store({ defaults: defaultStoreState });

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

  const bounds = store.get('bounds');
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: bounds.width,
    height: bounds.height,
    experimentalFeatures: true,
    titleBarStyle: 'hidden-inset',
    webPreferences: {
      experimentalFeatures: true,
    },
  });

  // prettier-ignore
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

  // Build the menu
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow.on('close', () => {
    store.set('bounds', mainWindow.getBounds());
  });
}

app.on('ready', createWindow);
