import { ParsePage, version } from "../src";
import { createServer } from "http";
(async () => {
    console.log(`Running unit test on JSAP v${version}`);

    console.log(`Parsing test page`);
    let error: Error;
    let parsedpage = await ParsePage("ETSAYFGDSJHGDFGASJHDFSAJHDFAJSDHGFJDHASGFDJDS", {
        defaultFrontMatter: {
            error: "404.html",
            isolate: false,
        }
    }).catch((e) => {
        error = e;
        console.error(e);
    });

    console.log(`Parsed page:\n${JSON.stringify(parsedpage, undefined, 4)}`);

    console.log(`View the page live at http://localhost:1298`);
    createServer((req, res) => {
        res.setHeader("Content-Type", "text/html");
        if (parsedpage) res.write(parsedpage.html);
        else res.write(`<h1>Page did not parse</h1><code><pre>${error}</pre><code>`);
        res.end();
    }).listen(1298);

})();