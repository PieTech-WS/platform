import { Package } from "./packageMan";

interface packageInfo {
    enter: string,
    loggerConfig: any,
    type: "systemProcess" | "App" | "Service" | "Plugin"
}

interface packageList {
    [packageName: string]: Package
}

export { packageList, packageInfo };