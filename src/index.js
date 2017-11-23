import express from'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from './config';
import { loggerMiddleware } from './utils';
import { apiKeyMW } from './middleware';

import api from './api';
import './db';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(loggerMiddleware);

app.set('port', config.port);


app.use('/api', apiKeyMW, api);

app.listen(app.get('port'), () => {
  console.log(`Started on ${app.get('port')}`);
});
