import { Snippet, FrontMatter } from "./index";

export class ParsedPage {
    /** Parsed HTML */
    html: string;
    /** Code snippets in the file */
    snippets: Snippet<any>[];
    /** JSON front matter of the file */
    frontmatter: FrontMatter;
    /** Time in miliseconds that it took to parse the file */
    parseTime: number;
    // /** Get the page as a string */
    // toString(): string {
    //     return this.html;
    // }

    constructor(html: string, snippets: Snippet<any>[], frontmatter: FrontMatter, parseTime: number) {
        this.html = html;
        this.snippets = snippets;
        this.frontmatter = frontmatter;
        this.parseTime = parseTime;
    }
}