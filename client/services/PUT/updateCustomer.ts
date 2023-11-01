import axios from 'axios';
import { Customer } from '../types';

export default async function updateCustomer(updatedCustomer: Customer, id: string) {
    try {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/customer/update/${id}`, updatedCustomer)
    } catch (error) {
        console.log(error);
    }
};