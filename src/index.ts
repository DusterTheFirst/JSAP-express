export const version: string = require("../package").version;

export * from "./Parser";

export * from "./Errors/ParseError";
export * from "./Errors/SnippetRuntimeError";

export * from "./ParsedParts/FrontMatter";
export * from "./ParsedParts/ParsedPage";
export * from "./ParsedParts/Snippet";
export * from "./ParsedParts/Expression";
export * from "./ParsedParts/Include";