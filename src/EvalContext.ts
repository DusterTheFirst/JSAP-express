import { Request, Response, Application } from "express";
import { FrontMatter } from "./ParsedParts/FrontMatter";

export class EvalContext {
    // Webserver interfacing
    public readonly app: Application;
    public readonly req: Request;

    public readonly frontmatter: FrontMatter;

    constructor(frontmatter: FrontMatter, app: Application, req: Request, res: Response) {
        this.frontmatter = frontmatter;
        this.app = app;
        this.req = req;
        this.redirect = (a: string | number, b?: string | number) => res.redirect(a as any, b as any);
    }

    // TODO: Make parser drop everything and switch pages when called
    redirect(url: string): void;
    redirect(status: number, url: string): void;
    redirect(url: string, status: number): void;
    redirect(a: string | number, b?: string | number) {}
}