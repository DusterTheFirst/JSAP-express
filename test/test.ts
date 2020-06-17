import { version, JSAP } from "../src";
import { parse } from "url";
import { inspect } from "util";

import { EvalContext } from "../src/EvalContext";
import { Expression } from "../src/ParsedParts/Expression";
import { Bracket } from "../src/ParsedParts/Bracket";

import * as express from "express";

let app = express();

app.get("/", (req, res) => {
    res.contentType("html");
    res.write(runTest(() => new Expression(new Bracket(0, "1"), "this").evaluate(new EvalContext(null, app, req, res)), "Expression Evaluation"));
    res.write(`<hr>Unit test preformed on ${new Date().toDateString()} ${new Date().toTimeString()}`);
    res.send();
});

app.use("/example", JSAP("./test/example.jsap.html"));

app.listen(9999);

function runTest(test: Function, name: string) {
    try {
        let results = test();
        return `<h1>Unit Test '${name}'</h1><strong>CODE</strong><pre style='width: 100%; overflow: auto'><code>${test.toString()}</pre></code><br><strong>RESULTS</strong><pre style='width: 100%; overflow: auto'><code>${inspect(results)}</code></pre>`;
    } catch (e) {
        return `<h1>Unit Test '${name}'</h1><h3>FAILED</h3><pre style='width: 100%; overflow: auto'><code>${e}</code></pre>`;
    }
}