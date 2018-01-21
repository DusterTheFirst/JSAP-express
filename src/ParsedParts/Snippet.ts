import { Bracket } from "../index";

export class Snippet<T> extends Bracket {
    /** Raw unparsed snippet */
    script: string;
    /** Output */
    output: string;

    // Set defining types
    prefix: "$";
    suffix: "";

    constructor(bracket: Bracket, script: string) {
        super(bracket);
        this.script = script;
    }

    evaluate(context: any) {
        this.output = new Function("1+2")();
    }
}