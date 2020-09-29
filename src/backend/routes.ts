import express, { response } from 'express';

export function routes(router: express.Router) {
    router.get('/api/test', (req: express.Request, res: express.Response) => {
        res.status(200).send({ code: "hello world" });
    });

}
