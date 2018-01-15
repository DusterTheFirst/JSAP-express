import { Snippet } from "../index";

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