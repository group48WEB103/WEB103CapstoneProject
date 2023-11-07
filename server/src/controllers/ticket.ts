import {Request,Response} from 'express';
import pgp from 'pg-promise';
import dotenv from 'dotenv';
import {Ticket} from '../models/ticket'
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

  export class TicketQueries {

    async createNewticket(req: Request, res: Response, data: Ticket) { 
        try {
            const { event_id, title, seat_numbers, description, image, stadium_id, price} = data;
            const ticket =  pool.manyOrNone('INSERT INTO ticket (event_id, title, seat_numbers, description, image, stadium_id, price) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *', [event_id, title, seat_numbers, description, image, stadium_id, price])
           
        } catch (error) {
            console.error(error)
            return res.status(500).json({"error":'server error'})
        }
    }

    async getAllTickets(req: Request, res: Response) {
        try {
            const ticket = await pool.manyOrNone('SELECT * FROM ticket ORDER BY title ASC')
            return res.json(ticket)
        } catch (error) {
            console.error(error)
            return res.status(500).json({"error":'server error'})
        }
    }


    async getTicketByID(req: Request, res: Response, id: string) {
        try {
            
            const ticket = await pool.manyOrNone('SELECT * FROM ticket WHERE id = $1',[id])
            return res.json(ticket)
        } catch (error) {
            console.error(error)
            return res.status(500).json({"error":'server error'})
        }
    }


    async updateTicket(req: Request, res: Response, id: string, data: Ticket) {
        try {
            const { event_id, title, seat_numbers, description, image, stadium_id, price} = data;
            const ticket = await pool.manyOrNone('UPDATE ticket SET event_id = $2, title = $3, seat_numbers = $4, description = $5, image = $6, stadium_id = $7, price = $8 WHERE id = $1',[id, event_id, title, seat_numbers, description, image, stadium_id, price])
            return res.json(ticket)
        } catch (error) {
            console.error(error)
            return res.status(500).json({"error":'server error'})
        }
    }

    async deleteTicket(req: Request, res: Response, id: string) {
        try {
            const ticket = await pool.manyOrNone('DELETE from ticket WHERE id = $1',[id])
            return res.json(ticket)
        } catch (error) {
            console.error(error)
            return res.status(500).json({"error":'server error'})
        }
    }
    
  }
  