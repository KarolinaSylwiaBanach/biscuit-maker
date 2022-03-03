import {Router, Response, Request} from 'express';
import {handlebarsHelpers} from "../utils/handlebars-helpers";
import {COOKIE_BASES, COOKIE_ADDONS} from "../data/cookies-data";
import {CookieMakerApp} from "../index";
import {MyRouter} from "../types/myRouter";

export class OrderRouter implements MyRouter{
    public readonly urlPrefix = '/order';
    public readonly router = Router();
    constructor(private cmapp: CookieMakerApp) {
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router.get('/summary', this.summary);
        this.router.get('/thanks', this.thanks);
    }

    summary = (req: Request, res: Response) => {
        const {sum, allAddons, allBases, addons, base} = this.cmapp.getCookieSettings(req);

        res.render('order/summary', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    }
    thanks = (req: Request, res: Response) => {
        const {sum} = this.cmapp.getCookieSettings(req);

        res
            .clearCookie('cookieBase')
            .clearCookie('cookieAddons')
            .render('order/thanks', {
                sum,
            });
    }
}