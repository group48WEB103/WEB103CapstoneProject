import axios from 'axios';
import { Ticket } from '../types';

export default async function createTicket(newTicket: Ticket) {
    try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/new/ticket`, newTicket);
    } catch (error) {
        console.log(error);
    }
};