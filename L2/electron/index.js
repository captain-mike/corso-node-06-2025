const { app, BrowserWindow } = require('electron');

function createWindow() {

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // Load the index.html of the app.
  mainWindow.loadFile('index.html');

}

app.whenReady().then(createWindow);