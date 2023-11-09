import { Request, Response } from "express";
import { Stadium } from '../models/stadium';
import { pool } from '../db.config.js';

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
            const stadium = await pool.one('SELECT * FROM stadium WHERE id = $1', [id]);
            return res.json(stadium);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Server error getting stadium by id' });
        }
    };

    // createNewStadium(req: Request, res: Response, data: Stadium) {
    //     try {
    //         pool.none('INSERT INTO stadium (location, title, address, description, capacity, image, gallery) VALUES ($1, $2, $3, $4, $5, $6)',
    //         [data.location, data.title, data.address, data.description, data.capacity, data.image, data.gallery]);
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: 'Server error creating new stadium' });
    //     }
    // };

    // updateStadium(req: Request, res: Response, id: string, data: Stadium) {
    //     try {
    //         pool.none('UPDATE stadium SET location = $1, title = $2, address = $3, description = $4, capacity = $5, image = $6, gallery = $7 WHERE id = $8',
    //         [data.location, data.title, data.address, data.description, data.capacity, data.image, data.gallery, id]);
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: 'Server error updating stadium' });
    //     }
    // };

    // deleteStadium(req: Request, res: Response, id: string) {
    //     try {
    //         pool.none('DELETE FROM stadium WHERE id = $1', [id]);
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: 'Server error deleting stadium' });
    //     }
    // };

};