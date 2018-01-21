export interface FrontMatter {
    /** Error page */
    error?: string;
    /** Any front matter that is not known to the parser */
    unparsed?: {
        [x: string]: string;
    };
}