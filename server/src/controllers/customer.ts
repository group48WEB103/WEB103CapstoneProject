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

  const db = pgp()(connection)
  export class CustomerQueries {
    async getCustomerByID(req: Request, res: Response, id: string) {
        try {
            const customer = await db.manyOrNone('SELECT * FROM customer WHERE id = $1',[id])
            return res.json(customer)
        } catch (error) {
            console.error(error)
            return res.status(500).json({error:'server error'})
        }
    }
  }
  