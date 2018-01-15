import { ParsedPage, Snippet, SnippetRuntimeError, FrontMatter } from "./index";

export interface ParserOptions {
    defaultFrontMatter: FrontMatter;
}

/** Parse a JSAP page */
export async function ParsePage(page: string, options?: ParserOptions): Promise<ParsedPage> {
    return new Promise<ParsedPage>((resolve, reject) => {
        // resolve(new ParsedPage(page, [new Snippet(10, 10, 100, "return zoop", "zoop")], null, 100));
        reject(new SnippetRuntimeError(new Snippet<string>(0, 10, 1000, "process.exit()", null), new Error("no")));
    });
}