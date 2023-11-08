export interface Ticket {
    event_id: number;
    title: string;
    seat_numbers: number[];
    description: string;
    image: string;
    stadium_id: number;
    price: number;
};