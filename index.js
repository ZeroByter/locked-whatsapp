const { app, BrowserWindow, globalShortcut, powerMonitor } = require('electron')
const fs = require("fs")

app.userAgentFallback = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36";

function isDev() {
    return process.mainModule.filename.indexOf("app.asar") === -1
}

function createWindow() {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        },
        icon: __dirname + "/favicon.ico",
    })

    if (!isDev()) {
        win.removeMenu()
    }

    win.loadFile('index.html')

    globalShortcut.register("Shift+Escape", () => {
        win.loadFile('index.html')
    })


    powerMonitor.addListener('lock-screen', () => {
        win.loadFile('index.html')
    });

    win.maximize()
}

app.whenReady().then(() => {
    if (!isDev()) {
        globalShortcut.register("CommandOrControl+R", () => { }) //When in production, we disable reloading the page...
    }

    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
