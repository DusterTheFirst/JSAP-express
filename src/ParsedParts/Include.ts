export class Include {
    /** Path to included file */
    path: string;
    /** Parse the file */
    parse: boolean;

    constructor(path: string, parse = false) {
        this.path = path;
        this.parse = parse;
    }
}