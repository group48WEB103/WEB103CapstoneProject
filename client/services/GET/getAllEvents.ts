import axios from 'axios';

export default async function getAllEvents() {
    try {
        const allEvents = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events`);
        return allEvents.data;
    } catch (error) {
        console.log(error);
    }
};