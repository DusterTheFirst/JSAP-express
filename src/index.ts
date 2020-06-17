import { RequestHandler, Response, Request, NextFunction } from "express";

import * as fs from "fs";

export const version: string = require("../package").version;

// export * from "./Parser";
// export * from "./ParsedPage";
// export * from "./PreparsedPage";

// export * from "./Errors/ParseError";
// export * from "./Errors/SnippetRuntimeError";
// export * from "./Errors/IndexOutOfRangeError";

// export * from "./ParsedParts/Bracket";
// export * from "./ParsedParts/Comment";
// export * from "./ParsedParts/Expression";
// export * from "./ParsedParts/FrontMatter";
// export * from "./ParsedParts/Include";
// export * from "./ParsedParts/Snippet";

export function JSAP(file: string): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        res.contentType("text/html");
        res.send(fs.readFileSync(file));
    };
}