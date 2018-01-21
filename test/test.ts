import { ParsePage, version, PreparsedPage, ParseBrackets, Expression, Bracket } from "../src";
import { createServer } from "http";
import { readFileSync } from "fs";
import { parse } from "url";
import { inspect } from "util";
import { EvalContext } from "../src/EvalContext";


console.log(`View the results at http://localhost:999/unittest`);

console.log(`View the parsed page live at http://localhost:9999`);
createServer(async (req, res) => {
    if (parse(req.url).pathname === "/unittest") {
        res.setHeader("Content-Type", "text/html");
        console.log(`Running unit test on JSAP v${version}`);

        // res.write("<h1>Parsed Test Page</h1>");
        // let initial = await ParsePage(readFileSync("./test/example.jsap.html").toString(), {
        //     defaultFrontMatter: {
        //         error: "reee.html",
        //     }
        // }).catch((e) => {
        //     console.error(e);
        // });
        // res.write("<pre style='width: 100%; overflow: auto'><code>");
        // res.write(JSON.stringify(initial, undefined, 4).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;"));
        // res.write("</pre></code>");
        // res.write("<h1>Parsed Test Page's Barces</h1>");
        // let braces = await ParseBrackets(readFileSync("./test/example.jsap.html").toString()).catch((e) => {
        //     console.error(e);
        // });
        // res.write("<pre style='width: 100%; overflow: auto'><code>");
        // res.write(JSON.stringify(braces, undefined, 4).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;"));
        // res.write("</pre></code>");
        // res.write("<h1>Tested Expression</h1>");
        // res.write("<pre style='width: 100%; overflow: auto'><code>");
        // res.write(inspect(new Expression(new Bracket(0, "1"), "this").evaluate(), false, 1, false).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;"));
        // res.write("</pre></code>");
        res.write(runTest(() => new Expression(new Bracket(0, "1"), "this").evaluate(new EvalContext(null)), "Expression Evaluation"));
        res.write(runTest(() => new Expression(new Bracket(0, "1"), "this.app").evaluate(new EvalContext(null)), "Globals Evaluation"));

        res.write(`<hr>Unit test preformed on ${new Date().toDateString()} ${new Date().toTimeString()}`);
        res.end();
    } else {
        // res.setHeader("Content-Type", "text/html");

        // let parsedpage = await ParsePage(readFileSync("./test/example.jsap.html").toString(), {
        //     defaultFrontMatter: {
        //         error: "i hecced up.html",
        //     }
        // }).catch((e) => {
        //     res.write(`<h1>Page did not parse</h1><code><pre>${e}</pre><code>`);
        // });

        // if (parsedpage) res.write(parsedpage.html);
        res.end();
    }
}).listen(9999);

function runTest(test: Function, name: string) {
    try {
        let results = test();
        return `<h1>Unit Test '${name}'</h1><strong>CODE</strong><pre style='width: 100%; overflow: auto'><code>${test.toString()}</pre></code><br><strong>RESULTS</strong><pre style='width: 100%; overflow: auto'><code>${inspect(results)}</code></pre>`;
    } catch (e) {
        return `<h1>Unit Test '${name}'</h1><h3>FAILED</h3><pre style='width: 100%; overflow: auto'><code>${e}</code></pre>`;
    }
}