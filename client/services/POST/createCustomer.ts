import axios from 'axios';
import { Customer } from '../types';

export default async function createCustomer(newCustomer: Customer) {
    try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/new/customer`, newCustomer);
    } catch (error) {
        console.log(error);
    }
};