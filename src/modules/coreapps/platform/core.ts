import {app, BrowserWindow} from 'electron';
import AppEngine from "./appMan/AppEngine";

function createDebugWindow(){
    const debugWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true
        }
    });
    debugWindow.loadFile('resources/debug.html')
}

class Cora{
    public rootDir: string;
    public appEngine: AppEngine | undefined;
    constructor(rootDir: string) {
        this.rootDir = rootDir;
    };
    init(){
        this.appEngine = new AppEngine(this.rootDir);
    };

}

export { Cora, createDebugWindow }