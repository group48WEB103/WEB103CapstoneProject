import axios from 'axios';
import { Ticket } from '../types';

export default async function createTicket(newTicket: Ticket) {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/ticket/new`, newTicket);
        return res.data.id;
    } catch (error) {
        console.log(error);
    }
};