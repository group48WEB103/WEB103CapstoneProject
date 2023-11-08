import pgp from 'pg-promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = {
    host: process.env.HOST,
    port: Number(process.env.PORT),
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    ssl: true
};

export const pool = pgp()(connection);