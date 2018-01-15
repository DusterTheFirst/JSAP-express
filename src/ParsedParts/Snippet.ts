export class Snippet<T> {
    /** Row of the start of the snippet */
    row: number;
    /** Column of the start of the snippet */
    column: number;
    /** Length of the snippet */
    length: number;
    /** Raw unparsed snippet */
    script: string;
    /** Parsed snippet output */
    output: T;

    constructor(row: number, column: number, length: number, script: string, output: T) {
        this.row = row;
        this.column = column;
        this.length = length;
        this.script = script;
        this.output = output;
    }
}