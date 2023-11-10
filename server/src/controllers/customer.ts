import { Request, Response } from 'express';
import { Customer } from '../models/customer';
import { pool } from '../db.config.js';

export class CustomerQueries {

    async getCustomerByCredentials(req: Request, res: Response, email: string, password: string) {
        try {
            const customer = await pool.one('SELECT * FROM customer WHERE email = $1 AND password = $2', [email, password]);
            return res.json(customer);
        } catch (error) {
            console.error(error);
            return res.status(400).json({ 'error': 'Invalid Credentials.' });
        }
    };

    async getCustomerByEmail(req: Request, res: Response, email: string) {
        try {
            const customer = await pool.one('SELECT * FROM customer WHERE email = $1', [email]);
            return res.json(customer.id);
        } catch (error) {
            console.error(error);
            return res.status(400).json({ error: 'Server error fetching customer by email' });
        }
    };

    createNewCustomer(req: Request, res: Response, data: Customer) { 
        try {
            pool.none('INSERT INTO customer (name, email, password, tickets) VALUES ($1, $2, $3, $4)', 
            [data.name, data.email, data.password, data.tickets]); 
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Server error creating new customer' });
        }
    };

    updateCustomer(req: Request, res: Response, id: string, data: Customer, password: string) {
        try {
            pool.none('UPDATE customer SET name = $1, email = $2, password = $3, tickets = $4 WHERE id = $5 AND password = $6',
            [data.name, data.email, data.password, data.tickets, id, password]);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Server error updating customer' });
        }
    };

    deleteCustomer(req: Request, res: Response, id: string, password: string) {
        try {
            pool.none('DELETE FROM customer WHERE id = $1 AND password = $2', [id, password]);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Server error deleting customer' });
        }
    };

};