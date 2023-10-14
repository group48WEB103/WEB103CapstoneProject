import axios from 'axios';

export default async function getHotelByID(id: string) {
    try {
        const hotel = await axios.get(`https://codepath-web103-capstone48-project-api.vercel.app/hotel/${id}`)
        return hotel.data;
    }
    catch (error) {
        console.log(error);
    }
}