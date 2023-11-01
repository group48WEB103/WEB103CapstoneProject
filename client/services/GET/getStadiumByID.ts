import axios from 'axios';

export default async function getStadiumByID(id: string) {
    try {
        const stadium = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stadium/${id}`);
        return stadium.data;
    } catch (error) {
        console.log(error);
    }
};