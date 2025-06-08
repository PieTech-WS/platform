interface permission {
    provider: string;
    description: string;
}

interface permissionList {
    [permissionName: string]: permission
};

interface permissionRecord {
    onceAllowed: boolean;
    allowed: boolean;
}

interface permissionRecordList {
    [packageName: string]: permissionRecord;
}

export { permissionRecord, permissionRecordList, permissionList, permission };