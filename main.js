/// <reference path="./typings/index.d.ts" />
const electron = require("electron");
const {
    app
} = electron;
const {
    BrowserWindow
} = electron;
let win;

function cw() {
    win = new BrowserWindow({
        webPreferences: {
            experimentalFeatures: true,
        },
        width: 800,
        height: 600
    });
    win.loadURL(`http://localhost:8080/`);
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

app.on('ready', cw);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if (win === null) {
        cw();
    }
});