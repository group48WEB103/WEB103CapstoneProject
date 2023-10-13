import axios from 'axios';
import { Hotel } from '../types';

export default async function updateHotel(updatedHotel: Hotel) {
    try {
        await axios.patch(`https://hotel-template-backend.vercel.app/hotel/update/${updatedHotel}`)
    }
    catch (error) {
        console.log(error);
    }
}