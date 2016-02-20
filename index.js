'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// Keeping this reference will prevent garbage collector from closing the app
var mainWindow = null

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // OS X apps use to hide instead of closing
  if (process.platform != 'darwin') {
    app.quit()
  }
})

// Load the main window when Electron has been initialised
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    'width': 800,
    'height': 600,
    'min-width': 500,
    'min-height': 300,
    'frame': false
  })

  mainWindow.loadURL('file://' + __dirname + '/src/index.html')

  // Dereference it when window is closed
  mainWindow.on('closed', () => mainWindow = null)
})
