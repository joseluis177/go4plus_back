import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

// - System modules
import config from '../utils/config'
import sysConfigRoutes from './routes/sysconfig.route';
import apiStatusRoutes from './routes/apistatuscode.route';
import parmTableRoutes from './routes/parmtable.routes';
import parmEntityRoutes from './routes/parmentity.route'
import swaggerOptions from './swagger';

// - App create
const app = express();
const swaggerDocs = swaggerJSDoc(swaggerOptions);

// - App config
app.set('port', config.APP_PORT);
app.set('json spaces', 2);

// - Midleare
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// - Routes
app.use(apiStatusRoutes);
app.use(sysConfigRoutes);
app.use(parmTableRoutes);
app.use(parmEntityRoutes);

export default app;