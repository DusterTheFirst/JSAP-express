import { FrontMatter } from "./index";
import { Request, Response, Application } from "express";

export class EvalContext {
    // Webserver interfacing
    private _req: Request;
    get req() {
        if (this._req) return this._req;
        else throw "Page parsed in non-webserver context. REQ, RES, and APP are unavaliable in this context";
    }
    private _res: Response;
    get res() {
        if (this._res) return this._res;
        else throw "Page parsed in non-webserver context. REQ, RES, and APP are unavaliable in this context";
    }
    private _app: Application;
    get app() {
        if (this._app) return this._app;
        else throw "Page parsed in non-webserver context. REQ, RES, and APP are unavaliable in this context";
    }

    public readonly frontmatter: FrontMatter;

    constructor(frontmatter: FrontMatter, express?: { app: Application, res: Response, req: Request }) {
        this.frontmatter = frontmatter;
        if (express) {
            this._app = express.app;
            this._req = express.req;
            this._res = express.res;
        }
    }
}