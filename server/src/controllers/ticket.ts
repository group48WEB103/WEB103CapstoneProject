import { Request, Response } from 'express';
import pgp from 'pg-promise';
import { Ticket } from '../models/ticket';
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

export class TicketQueries {

    async getAllTickets(req: Request, res: Response) {
        try {
            const tickets = await pool.manyOrNone('SELECT * FROM ticket');
            return res.json(tickets);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Server error getting all tickets' });
        }
    };

    async getTicketByID(req: Request, res: Response, id: string) {
        try {
            const ticket = await pool.manyOrNone('SELECT * FROM ticket WHERE id = $1', [id]);
            return res.json(ticket);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Server error getting ticket by id' });
        }
    };

    createNewticket(req: Request, res: Response, data: Ticket) { 
        try {
            pool.none('INSERT INTO ticket (event_id, title, seat_numbers, description, image, stadium_id, price) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
            [data.event_id, data.title, data.seat_numbers, data.description, data.image, data.stadium_id, data.price]);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Server error creating new ticket' });
        }
    };

    // updateTicket(req: Request, res: Response, id: string, data: Ticket) {
    //     try {
    //         pool.none('UPDATE ticket SET event_id = $1, title = $2, seat_numbers = $3, description = $4, image = $5, stadium_id = $6, price = $7 WHERE id = $8',
    //         [data.event_id, data.title, data.seat_numbers, data.description, data.image, data.stadium_id, data.price, id]);
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: 'Server error updating ticket' });
    //     }
    // };

    // deleteTicket(req: Request, res: Response, id: string) {
    //     try {
    //         pool.none('DELETE from ticket WHERE id = $1', [id]);
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: 'Server error deleting ticket' });
    //     }
    // };

};