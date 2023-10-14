import axios from 'axios';
import { Hotel } from '../types';

export default async function updateHotel(updatedHotel: Hotel, id: string) {
    try {
        await axios.put(`https://codepath-web103-capstone48-project-api.vercel.app/hotel/update/${id}`, updatedHotel)
    }
    catch (error) {
        console.log(error);
    }
}