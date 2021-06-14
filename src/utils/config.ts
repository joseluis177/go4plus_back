import dotenv from 'dotenv';
dotenv.config();

export default {
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_CLUSTER: process.env.DATABASE_CLUSTER, 
    DATABASE_NAME: process.env.DATABASE_NAME, 
    DATABASE_OPTIONS: process.env.DATABASE_OPTIONS,
    APP_PORT: process.env.APP_PORT 
}