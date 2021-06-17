import dotenv from 'dotenv';
dotenv.config();

export default {
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_CLUSTER: process.env.DATABASE_CLUSTER, 
    DATABASE_NAME: process.env.DATABASE_NAME, 
    DATABASE_OPTIONS: process.env.DATABASE_OPTIONS,
    DATABASE_LOCAL: process.env.DATABASE_LOCAL,
    DATABASE_USE: process.env.DATABASE_USE,
    APP_PORT: process.env.APP_PORT 
}