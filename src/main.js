const { app, BrowserWindow } = require('electron')

let mainWindow;

function createWindow () {
  const port = process.env.PORT || 3000; // Default to port 3000

  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1440, height: 900 })

  const isDev = !!process.env.ELECTRON_DEV;

  // and load the index.html of the app.
  mainWindow.loadURL(
    isDev
      ? `http://localhost:${port}` // Dev server ran by react-scripts
      : `file://${path.join(__dirname, '/build/index.html')}` // Bundled application
  );

  // Do special things on development
  if (isDev) {
    mainWindow.webContents.openDevTools()
  }
}

app.on('ready', createWindow);
