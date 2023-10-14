import axios from 'axios';

export default async function deleteEvent(id: string) {
    try {
        await axios.delete(`https://codepath-web103-capstone48-project-api.vercel.app/event/delete/${id}`)
    }
    catch (error) {
        console.log(error);
    }
}