import axios from 'axios';

export default async function getAllEvents() {
    try {
        const allEvents = await axios.get('https://codepath-web103-capstone48-project-api.vercel.app/events');
        return allEvents.data;
    }
    catch (error) {
        console.log(error);
    }
}