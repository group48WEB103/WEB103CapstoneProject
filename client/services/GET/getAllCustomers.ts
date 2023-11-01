import axios from 'axios';

export default async function getAllCustomers() {
    try {
        const allCustomers = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/customers`);
        return allCustomers.data;
    } catch (error) {
        console.log(error);
    }
};