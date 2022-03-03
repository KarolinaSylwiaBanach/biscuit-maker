import {Router, Request, Response} from "express";
import {CookieMakerApp} from "../index";
import {MyRouter} from "../types/myRouter";

export class HomeRouter implements MyRouter{
    public readonly urlPrefix = '/';
    public readonly router = Router();
    constructor(private cmapp: CookieMakerApp) {
        this.setUpRoutes();
    }
    setUpRoutes(){
        this.router.get('/', this.home);
    }
    home=(req: Request, res: Response)=> {
        const {sum, allAddons, allBases, addons, base} = this.cmapp.getCookieSettings(req);

        res.render('home/index', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    }
}

