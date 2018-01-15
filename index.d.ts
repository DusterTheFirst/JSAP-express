export declare function ParsePage(): ParsedPage;
export declare class ParseError extends Error {
    name: "ParseError";
    message: string;
    row: number;
    column: number;
    stack: string;
    constructor(row: number, column: number);
}
export declare class SnippetRuntimeError extends Error {
    name: "SnippetRuntimeError";
    message: string;
    snippet: Snippet<null>;
    error: Error;
    stack: string;
    constructor(snippet: Snippet<any>, error: Error);
}
export declare class ParsedPage {
    html: string;
    snippets: Snippet<any>[];
    frontmatter: FrontMatter;
    parseTime: number;
    toString(): string;
}
export declare class Snippet<T> {
    row: number;
    column: number;
    length: number;
    script: string;
    output: T;
    constructor(row: number, column: number, length: number, script: string, output: T);
}
export declare class FrontMatter {
    isolate: boolean;
    error: string;
    unparsed: {
        [x: string]: string;
    };
}
