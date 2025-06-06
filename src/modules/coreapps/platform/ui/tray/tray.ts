import { appTaskList } from "../../interfaces";
import { Tray } from "electron";
import Resource from "../../resources/resourceMan";

class SystemTray{
    private taskList: appTaskList={};
    private tray: Tray|undefined;
    private resource: Resource;
    constructor() {
        this.resource = new Resource("tray")
    };
    init() {
        this.tray = new Tray(this.resource.get('favicon-128.ico'));
    };
    // addTask()
}