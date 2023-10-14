import axios from 'axios';

export default async function getAllHotels() {
    try {
        const allHotels = await axios.get('https://codepath-web103-capstone48-project-api.vercel.app/hotels');
        return allHotels.data;
    }
    catch (error) {
        console.log(error);
    }
}