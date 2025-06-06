import { app, BrowserWindow } from "electron";
import { Cora } from "./modules/coreapps/platform/core";
import config from './config.json';
import log4js from "log4js";
import pathMan from "./modules/coreapps/platform/pathman";

var platformCore = null;

const pathManager = new pathMan(config.sysRootDir, 'mainProcess');

log4js.configure({
    appenders: {
        console: { type: "console" },
        file: {
            type: "file",
            filename: pathManager.getLogDir(),
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            maxLogSize: 10485760
        }
    },
    categories: {
        default: { appenders: [ "console", "file"], level: "info"},
        mainProcess: { appenders: [ "console", "file"], level: "info"}
    }
})

const logger = log4js.getLogger("mainProcess");

app.whenReady().then(() => {
    platformCore = new Cora(config.sysRootDir);
    logger.info("Initializing platform");
    platformCore.init();

})