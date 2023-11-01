import axios from 'axios';

export default async function getAllTickets() {
    try {
        const allTickets = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tickets`);
        return allTickets.data;
    } catch (error) {
        console.log(error);
    }
};