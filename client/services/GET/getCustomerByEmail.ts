import axios from 'axios';

export default async function getCustomerByEmail(email: string) {
    try {
        const customer = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/customer/exist/${email}`);
        if (customer.data === "true") {
            return true; 
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
};