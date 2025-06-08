import { packageList, packageInfo } from "./interfaces";

class packageMan {
    private pkgList: packageList = {};
    constructor() {

    };
    register(pkgName: string, pkgInfo: packageInfo) {
        this.pkgList[pkgName] = new Package(pkgName, pkgInfo);
    };
    delete(pkgName: string) {
        delete this.pkgList[pkgName];
    }
};

class Package {
    public name: string;
    public enter: string;
    public loggerConfig: any;
    public type: string;
    constructor(pkgName: string, pkgInfo: packageInfo) {
        this.name = pkgName;
        this.enter = pkgInfo.enter;
        this.loggerConfig = pkgInfo.loggerConfig;
        this.type = pkgInfo.type;
    }
}

export { packageMan, Package };