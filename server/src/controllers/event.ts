import { Request, Response } from "express";
import { Event } from '../models/event';
import { pool } from '../db.config.js';

export class EventQueries {

    async getAllEvents(req: Request, res: Response) {
        try {
            const events = await pool.manyOrNone('SELECT * FROM event');
            return res.json(events);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'Server error getting all events' })
        }
    };

    async getEventByID(req: Request, res: Response, id: string) {
        try {
            const event = await pool.one('SELECT * FROM event WHERE id = $1', [id]);
            return res.json(event);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Server error getting event by id' });
        }
    };

    // createNewEvent(req: Request, res: Response, data: Event) {
    //     try {
    //         pool.none('INSERT INTO event (stadium_id, title, description, performer, image) VALUES ($1, $2, $3, $4, $5)',
    //         [data.stadium_id, data.title, data.description, data.performer, data.image]);
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: 'Server error creating new event' });
    //     }
    // };

    // updateEvent(req: Request, res: Response, id: string, data: Event) {
    //     try {
    //         pool.none('UPDATE event SET stadium_id = $1, title = $2, description = $3, performer = $4, image = $5 WHERE id = $6',
    //         [data.stadium_id, data.title, data.description, data.performer, data.image, id]);
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: 'Server error updating event' });
    //     }
    // };

    // deleteEvent(req: Request, res: Response, id: string) {
    //     try {
    //         pool.none('DELETE FROM event WHERE id = $1', [id]);
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: 'Server error deleting event' });
    //     }
    // };

};