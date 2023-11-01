import { Request, Response } from "express";
import pgp from "pg-promise";
import {Stadium} from '../models/stadium';
import dotenv from 'dotenv'
dotenv.config()

const connection = {
    host: process.env.HOST,
    port: Number(process.env.PORT),
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    ssl: true,
  };

const pool = pgp()(connection)
export class StadiumQueries {
    async getAllStadiums(req: Request, res: Response){
        try {
            const stadium = await pool.manyOrNone('SELECT * FROM stadium ORDER BY title ASC')
            return res.json(stadium)
        } catch (error) {
            console.log(error)
            return res.status(500).json({error: 'server error'})
        }
    }

    async getStadiumByID(req: Request, res: Response, id: string){
        try {
            const stadium = await pool.manyOrNone('SELECT * FROM stadium WHERE id = $1',[id])
            return res.json(stadium)
        } catch (error) {
            console.log(error)
            return res.status(500).json({error: 'server error'})
        }
    }

    async createNewStadium(req: Request, res: Response){
        try {
            const {location,title,description,capacity,image,gallery} = req.body;
            const stadium = await pool.manyOrNone('INSERT INTO stadium (location,title,description,capacity,image,gallery) VALUES ($1,$2,$3,$4,$5, $6)',[location,title,description,capacity,image,gallery])
            return res.json(stadium)
        } catch (error) {
            console.log(error)
            return res.status(500).json({error: 'server error'})
        }
    }

    async updateStadium(req: Request, res: Response, id: string){
        try {
            const {location,title,description,capacity,image,gallery} = req.body;
            const stadium = await pool.manyOrNone('UPDATE stadium SET location = $2, title = $3, description = $4, capacity = $5, image = $6, gallery = $7 WHERE id = $1',[id,location,title,description,capacity,image,gallery])
            return res.json(stadium)
        } catch (error) {
            console.log(error)
            return res.status(500).json({error: 'server error'})
        }
    }

    async deleteStadium(req: Request, res: Response, id: string) {
        try {
            const stadium = await pool.manyOrNone('DELETE from stadium WHERE id = $1',[id])
            return res.json(stadium)
        } catch (error) {
            console.error(error)
            return res.status(500).json({error:'server error'})
        }
    }


}