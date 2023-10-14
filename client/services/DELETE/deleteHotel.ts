import axios from 'axios';

export default async function deleteHotel(id: string) {
    try {
        await axios.delete(`https://codepath-web103-capstone48-project-api.vercel.app/hotel/delete/${id}`)
    }
    catch (error) {
        console.log(error);
    }
}