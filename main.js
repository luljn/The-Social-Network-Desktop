const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })
    win.loadFile('sign-in.html')
}

app.whenReady().then(() => {
    createWindow()
})