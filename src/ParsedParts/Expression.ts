import { Bracket } from "../index";
import { EvalContext } from "../EvalContext";

export class Expression<T> extends Bracket {
    /** Raw unparsed snippet */
    script: string;
    /** Parsed snippet output */
    output: T;

    // Set defining types
    prefix: "=";
    suffix: "";

    constructor(bracket: Bracket, script: string) {
        super(bracket);
        this.script = script;
    }

    evaluate(context: EvalContext) {
        this.output = new Function(`return ${this.script};`).apply(context, [this.script]);
        return this.output;
    }
}