const { app, BrowserWindow } = require('electron')

function createWindow () {
  // 브라우저 창을 생성합니다.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.on('ready', createWindow)
