import axios from 'axios';

export default async function deleteCustomer(id: string) {
    try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/delete/customer/${id}`)
    } catch (error) {
        console.log(error);
    }
};