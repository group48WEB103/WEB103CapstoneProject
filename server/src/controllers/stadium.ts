import { Request, Response } from "express";
import pgp from "pg-promise";
import { Stadium } from '../models/stadium';
import dotenv from 'dotenv';
dotenv.config();

const connection = {
    host: process.env.HOST,
    port: Number(process.env.PORT),
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    ssl: true,
};

const pool = pgp()(connection);

export class StadiumQueries {

    async getAllStadiums(req: Request, res: Response) {
        try {
            const stadiums = await pool.manyOrNone('SELECT * FROM stadium');
            return res.json(stadiums);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Server error getting all stadiums' });
        }
    };

    async getStadiumByID(req: Request, res: Response, id: string) {
        try {
            const stadium = await pool.manyOrNone('SELECT * FROM stadium WHERE id = $1', [id]);
            return res.json(stadium);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Server error getting stadium by id' });
        }
    };

    // createNewStadium(req: Request, res: Response, data: Stadium) {
    //     try {
    //         pool.none('INSERT INTO stadium (location, title, description, capacity, image, gallery) VALUES ($1, $2, $3, $4, $5, $6)',
    //         [data.location, data.title, data.description, data.capacity, data.image, data.gallery]);
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: 'Server error creating new stadium' });
    //     }
    // };

    // updateStadium(req: Request, res: Response, id: string, data: Stadium) {
    //     try {
    //         pool.none('UPDATE stadium SET location = $1, title = $2, description = $3, capacity = $4, image = $5, gallery = $6 WHERE id = $7',
    //         [data.location, data.title, data.description, data.capacity, data.image, data.gallery, id]);
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: 'Server error updating stadium' });
    //     }
    // };

    // deleteStadium(req: Request, res: Response, id: string) {
    //     try {
    //         pool.none('DELETE from stadium WHERE id = $1', [id]);
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: 'Server error deleting stadium' });
    //     }
    // };

};