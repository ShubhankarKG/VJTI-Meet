import { app, BrowserWindow } from "electron";
import path from 'path';
import url from 'url';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(url.format({
    pathname: "localhost:3000",
    protocol: "http",
    slashes: true
  }));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('ready',()=>{
 const win = new BrowserWindow({width: 800, height: 600});
 win.loadURL('http://localhost:3000/');
});