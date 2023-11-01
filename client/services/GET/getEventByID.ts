import axios from 'axios';

export default async function getEventByID(id: string) {
    try {
        const event = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`);
        return event.data;
    } catch (error) {
        console.log(error);
    }
};