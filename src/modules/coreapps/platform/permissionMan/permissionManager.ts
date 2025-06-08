import { permissionRecordList, permissionList } from "./interfaces";

class PermissionManager {
    private rootDir: string;
    private permsRecord: permissionRecordList = {};
    private permsList: permissionList = {};
    constructor(rootDir: string) {
        this.rootDir = rootDir;
    };
    init() {

    }
}