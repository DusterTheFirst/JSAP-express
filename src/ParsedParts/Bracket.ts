export class Bracket {
    /** Start pos of the brace */
    start: number;
    /** End pos of the brace */
    end: number;
    /** Length of the snippet */
    length: number;
    /** Content inside of the brace */
    content: string;
    /** Brace prefix */
    prefix: string;
    /** Brace suffix */
    suffix: string;

    // Constructor overloads
    constructor(inheriter: Bracket)
    constructor(start: number, prefix: string)
    // Constructor
    constructor(startORinheriter: number | Bracket, prefix?: string) {
        // Determine which overload called
        if (prefix) {
            let start = startORinheriter as number;
            // Set the values
            this.start = start;
            this.prefix = prefix;
        } else {
            let inheriter = startORinheriter as Bracket;
            // Inherit the given bracket
            this.content = inheriter.content;
            this.end = inheriter.end;
            this.length = inheriter.length;
            this.prefix = inheriter.prefix;
            this.start = inheriter.start;
            this.suffix = inheriter.suffix;
        }
    }

    /** Close the Bracket */
    close(end: number, suffix: string, content: string) {
        this.end = end;
        this.suffix = suffix;
        this.length = end - this.start;
        this.content = content;
    }
}