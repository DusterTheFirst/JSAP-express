/** Parse a JSAP page */
export function ParsePage(): ParsedPage {
    throw new SnippetRuntimeError(new Snippet<string>(0, 10, 1000, "process.exit()", null), new Error("no"));
    // return null;
}

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

export class SnippetRuntimeError extends Error {
    /** Name of the error */
    name: "SnippetRuntimeError";
    /** Error message */
    message: string;
    /** Snippet that threw an error */
    snippet: Snippet<null>;
    /** Error thrown */
    error: Error;
    /** Stacktrace */
    stack: string;

    constructor(snippet: Snippet<any>, error: Error) {
        super(`Error excecuting snippet at line ${snippet.row}:${snippet.column}: "${error.name}: ${error.message}"`);
        this.name = "SnippetRuntimeError";
        this.snippet = snippet;
        this.error = error;
    }
}

export class ParsedPage {
    /** Parsed HTML */
    html: string;
    /** Code snippets in the file */
    snippets: Snippet<any>[];
    /** JSON front matter of the file */
    frontmatter: FrontMatter;
    /** Time in miliseconds that it took to parse the file */
    parseTime: number;
    /** Get the page as a string */
    toString(): string {
        return this.html;
    }
}

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

export class FrontMatter {
    /** Weather or not to isolate each tag's code from interaction */
    isolate: boolean;
    /** Any front matter that is not known to the parser */
    unparsed: {
        [x: string]: string;
    };
}