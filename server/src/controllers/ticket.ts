import { Request, Response } from 'express';
import { Ticket } from '../models/ticket';
import { pool } from '../db.config.js';

export class TicketQueries {

    // async getAllTickets(req: Request, res: Response) {
    //     try {
    //         const tickets = await pool.manyOrNone('SELECT * FROM ticket');
    //         return res.json(tickets);
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: 'Server error getting all tickets' });
    //     }
    // };

    async getTicketByID(req: Request, res: Response, id: string) {
        try {
            const ticket = await pool.one('SELECT * FROM ticket WHERE id = $1', [id]);
            return res.json(ticket);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Server error getting ticket by id' });
        }
    };

    createNewticket(req: Request, res: Response, data: Ticket) { 
        try {
            pool.one('INSERT INTO ticket (event_id, seat_numbers, stadium_id, price) VALUES ($1, $2, $3, $4) RETURNING id', 
            [data.event_id, data.seat_numbers, data.stadium_id, data.price])
            .then(result => {
                res.status(201).json({ id: result });
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ error: 'Server error creating new ticket' });
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Server error creating new ticket' });
        }
    };

    // updateTicket(req: Request, res: Response, id: string, data: Ticket) {
    //     try {
    //         pool.none('UPDATE ticket SET event_id = $1, seat_numbers = $2, stadium_id = $3, price = $4 WHERE id = $5',
    //         [data.event_id, data.seat_numbers, data.stadium_id, data.price, id]);
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: 'Server error updating ticket' });
    //     }
    // };

    // deleteTicket(req: Request, res: Response, id: string) {
    //     try {
    //         pool.none('DELETE FROM ticket WHERE id = $1', [id]);
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: 'Server error deleting ticket' });
    //     }
    // };

};