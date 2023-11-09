import axios from 'axios';

export default async function checkCredentials(email: string, password: string) {
    try {
        const invalid = { "error": "Invalid Credentials." };
        const getCreds = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/customer/auth/${email}/${password}`);
        if (getCreds.data != invalid) {
            return getCreds.data;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
};