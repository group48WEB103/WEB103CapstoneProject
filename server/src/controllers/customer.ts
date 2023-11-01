import {Request,Response} from 'express';
import pgp from 'pg-promise';
import dotenv from 'dotenv';
import {Customer} from '../models/customer'
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
  export class CustomerQueries {
    async getCustomerByID(req: Request, res: Response, id: string) {
        try {
            const customer = await pool.manyOrNone('SELECT * FROM customer WHERE id = $1',[id])
            return res.json(customer)
        } catch (error) {
            console.error(error)
            return res.status(500).json({error:'server error'})
        }
    }

    async createNewCustomer(req: Request, res: Response) {
        try {
            const {name,email,password,tickets} = req.body; // data is in the requested body and inserting into database
            const customer = await pool.manyOrNone('INSERT INTO customer (name,email,password,tickets) VALUES ($1,$2,$3,$4) RETURNING *', [name,email,password,tickets])
            return res.json(customer)
        } catch (error) {
            console.error(error)
            return res.status(500).json({error:'server error'})
        }
    }

    async updateCustomer(req: Request, res: Response, id: string) {
        try {
            const {name,email,password,tickets} = req.body; 
            const customer = await pool.manyOrNone('UPDATE customer SET name = $2, email = $3, password = $4, tickets = $5 WHERE id = $1',[id,name,email,password,tickets])
            
        } catch (error) {
            console.error(error)
            return res.status(500).json({error:'server error'})
        }
    }

    async deleteCustomer(req: Request, res: Response, id: string) {
        try {
            const customer = await pool.manyOrNone('DELETE from customer WHERE id = $1',[id])
            return res.json(customer)
        } catch (error) {
            console.error(error)
            return res.status(500).json({error:'server error'})
        }
    }
    
  }
  