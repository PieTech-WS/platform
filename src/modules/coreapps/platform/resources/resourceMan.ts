import path from 'node:path';

export default class resource{
    private readonly type: string;
    private readonly component: string;
    constructor(component: string, type: string='image') {
        this.type = type;
        this.component = component;
    };
    get(name: string){
        return path.join(__dirname, this.type, this.component, name);
    }
}