export interface FrontMatter {
    /** Weather or not to isolate each tag's code from interaction */
    isolate?: boolean;
    /** Error page */
    error?: string;
    /** Any front matter that is not known to the parser */
    unparsed?: {
        [x: string]: string;
    };
}