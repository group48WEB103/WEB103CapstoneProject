import axios from 'axios';

export default async function getAllStadiumss() {
    try {
        const allStadiumss = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stadiums`);
        return allStadiumss.data;
    } catch (error) {
        console.log(error);
    }
};