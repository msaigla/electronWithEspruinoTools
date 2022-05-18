const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
      width: 1000,
      height: 600,
      minWidth: 900,
      minHeight: 600,
      autoHideMenuBar: true,
      icon: __dirname + '/build/icon.ico',
      webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
          nodeIntegration: true,
          enableRemoteModule: true,
          contextIsolation: false,
          devTools: true
      }
  });
  mainWindow.loadFile('main.html');
  mainWindow.webContents.openDevTools();

  // const consoleWindow = new BrowserWindow({
  //   width: 1000,
  //   height: 600,
  //   autoHideMenuBar: true,
  //   icon: __dirname + '/build/icon.ico',
  //   show: false
  // });
  // consoleWindow.loadFile('console.html');
  // consoleWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})