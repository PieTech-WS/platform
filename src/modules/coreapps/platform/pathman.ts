import path from "node:path";

export default class pathMan {
    private rootDir: string;
    private component: string;
    constructor(rootDir: string, component: string) {
        this.rootDir = rootDir;
        this.component = component;
    };
    getLogDir() {
        return path.join(this.rootDir, "Log", this.component, this.component);
    }
}