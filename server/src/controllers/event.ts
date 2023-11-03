import { Request, Response } from "express";
import pgp from "pg-promise";
import {Event} from '../models/event';
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
export class EventQueries {
    async getAllEvents(req: Request, res: Response){
        try {
            const event = await pool.manyOrNone('SELECT * FROM event ORDER BY title ASC')
            return res.json(event)
        } catch (error) {
            console.log(error)
            return res.status(500).json({"error": 'server error'})
        }
    }

    async getEventByID(req: Request, res: Response, id: string){
        try {
            const event = await pool.manyOrNone('SELECT * FROM event WHERE id = $1',[id])
            return res.json(event)
        } catch (error) {
            console.log(error)
            return res.status(500).json({error: 'server error'})
        }
    }

    async createNewEvent(req: Request, res: Response, data: Event){
        try {
            
            const event = await pool.manyOrNone('INSERT INTO event (stadium_id,title,description,performer,image) VALUES ($1,$2,$3,$4,$5)',[data.stadium_id,data.title,data.description,data.performer,data.image])
            return res.json(event)
        } catch (error) {
            console.log(error)
            return res.status(500).json({error: 'server error'})
        }
    }

    async updateEvent(req: Request, res: Response, id: string,data: Event){
        try {
            
            const event = await pool.manyOrNone('UPDATE event SET stadium_id = $2, title = $3, description = $4, performer = $5, image = $6 WHERE id = $1',[id,data.stadium_id,data.title,data.description,data.performer,data.image])
            return res.json(event)
        } catch (error) {
            console.log(error)
            return res.status(500).json({error: 'server error'})
        }
    }

    async deleteEvent(req: Request, res: Response, id: string) {
        try {
            const event = await pool.manyOrNone('DELETE from event WHERE id = $1',[id])
            return res.json(event)
        } catch (error) {
            console.error(error)
            return res.status(500).json({error:'server error'})
        }
    }


}