import express from 'express';
import path from 'path';
import fs from 'fs';
import util from 'util';


export function routes(router: express.Router) {

    const fsReadFile = util.promisify(fs.readFile);

    router.get('/api/test', async (req, res) => {
        let imageArray = [];
        let totalFiles;
        fs.readdir(path.join(__dirname, 'assets'), (error, files) => {
            totalFiles = files.length;
        });
        for (let i = 0; i > totalFiles; i++) {

        }
        const data = await fsReadFile(path.join(__dirname, 'assets', 'foto1.jpeg'), { encoding: 'base64' });
        res.send({ imageData: [data] });
    });

    router.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/index.html'));
    });
}
