export class ParseError extends Error {
    /** Name of the error */
    name: "ParseError";
    /** Error message */
    message: string;
    /** Row of the parser error */
    row: number;
    /** Column of the parser error */
    column: number;
    /** Stacktrace */
    stack: string;

    constructor(row: number, column: number) {
        super(`Error parsing file at line ${row}:${column}`);
        this.name = "ParseError";
        this.row = row;
        this.column = column;
    }
}