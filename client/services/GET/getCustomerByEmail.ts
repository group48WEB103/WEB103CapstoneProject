import axios from 'axios';

export default async function getCustomerByEmail(email: string) {
    try {
        const customer = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/customer/${email}`);
        return customer.data;
    } catch (error) {
        console.log(error);
    }
};