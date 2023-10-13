import axios from 'axios';
import { Event } from '../types';

export default async function updateEvent(updatedEvent: Event) {
    try {
        await axios.patch(`https://hotel-template-backend.vercel.app/event/update/${updatedEvent}`)
    }
    catch (error) {
        console.log(error);
    }
}