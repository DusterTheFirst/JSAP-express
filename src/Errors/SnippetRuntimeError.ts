import { Snippet, PreparsedPage } from "../index";

export class SnippetRuntimeError extends Error {
    /** Name of the error */
    name: "SnippetRuntimeError";
    /** Error message */
    message: string;
    /** Snippet that threw an error */
    snippet: Snippet<null>;
    /** Preparsed page */
    page: PreparsedPage;
    /** Error thrown */
    error: Error;
    /** Stacktrace */
    stack: string;

    constructor(page: PreparsedPage, snippet: Snippet<any>, error: Error) {
        let pos = page.get2DPos(snippet.length);
        super(`Error excecuting snippet at line ${pos.x}:${pos.y}: "${error.name}: ${error.message}"`);
        this.name = "SnippetRuntimeError";
        this.snippet = snippet;
        this.error = error;
        this.page = page;
    }
}