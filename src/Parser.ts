import { FrontMatter } from "./ParsedParts/FrontMatter";
import { PreparsedPage } from "./PreparsedPage";
import { ParsedPage } from "./ParsedPage";
import { Bracket } from "./ParsedParts/Bracket";

export interface ParserOptions {
    defaultFrontMatter: FrontMatter;
}

/** Parse a JSAP page */
export async function ParsePage(page: string, options?: ParserOptions): Promise<ParsedPage> {
    // return new ParsedPage(page, [new Snippet(10, 10, 100, "return zoop", "zoop")], null, 100);
    // throw new SnippetRuntimeError(new Snippet<string>(0, 10, 1000, "process.exit()", null), new Error("no"));

    let pre = new PreparsedPage(page);

    return new ParsedPage(pre.raw, undefined, undefined, undefined);
}

// TODO: Add
export async function ParseBrackets(page: string/* , prefix?: string, suffix?: string */): Promise<Bracket[]> {
    // bracket depth
    let depth = 0;
    // char pos
    let pos = 0;
    // escaped
    let escaped = false;
    // length
    let length = page.length;

    let current: Bracket = null;

    let parsed: Bracket[] = [];

    while (pos < length) {
        // Inside Bracket
        if (current) {
            // Nested bracket depth
            if (page[pos] === "{") depth += 1;
            if (page[pos] === "}") depth -= 1;

            // If closed original bracket
            if (depth === -1) {
                parsed.push(current);
                current = null;
            }
        }

        if (page[pos] === "{") {
            current = new Bracket(pos, page[pos - 1]);
        }
    }


    return parsed;
}