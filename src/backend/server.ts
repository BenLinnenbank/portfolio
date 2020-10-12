import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'frontend')));
app.use(bodyParser.json());
app.use(express.json());

routes(app._router);

console.log('Listening on port 8000!');
app.listen(8000);