import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';

const app = express();

app.use(bodyParser.json());
app.use(express.json());

routes(app._router);

console.log('Listening on port 8000!');
app.listen(8000);