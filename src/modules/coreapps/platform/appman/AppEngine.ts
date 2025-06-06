import path from "node:path";
import asar from "@electron/asar";

export default class AppEngine {
    private readonly rootDir;
    private readonly configDir;
    constructor(rootDir: string) {
        this.rootDir = path.join(rootDir, 'Apps');
        this.configDir = path.join(rootDir, 'Config', 'appEngine.json');
    };
    loadApps() {

    }
}