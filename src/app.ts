import express from 'express';
import config from './utils/config'

// - App create
const app = express();

// - App config
app.set('port', config.APP_PORT);
app.set('json spaces', 2);

export default app;