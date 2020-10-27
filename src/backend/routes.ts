import express from 'express';
import path from 'path';
import fs from 'fs';
import util from 'util';


export function routes(router: express.Router) {

    const fsReadFile = util.promisify(fs.readFile);
    const fsReaddir = util.promisify(fs.readdir);

    router.get('/api/images', async (req, res) => {

        let imageData = [];

        const assetsFolder = await fsReaddir(path.join(__dirname, 'assets'));
        console.log(assetsFolder);

        for (let i = 0; i < assetsFolder.length; i++) {
            const data = await fsReadFile(path.join(__dirname, 'assets', assetsFolder[i]), { encoding: 'base64' });
            imageData.push(data);
        }
        res.send({ imageData });
    });

    router.post('/api/contact', async (req, res) => {
        await console.log('this is the Request: ', req.body);
    });

    router.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/index.html'));
    });
}
