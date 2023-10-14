import axios from 'axios';
import { Hotel } from '../types';

export default async function createHotel(newHotel: Hotel) {
    try {
        await axios.post(`https://hotel-template-backend.vercel.app/hotels/create`, newHotel);
    }
    catch (error) {
        console.log(error);
    }
}