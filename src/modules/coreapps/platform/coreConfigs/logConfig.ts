import log4js from "log4js";
import pathMan from "../pathman";

function getLogger(rootDir: string) {
    const pathManager = new pathMan(rootDir, 'org.coreapps.platform.core')
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
}