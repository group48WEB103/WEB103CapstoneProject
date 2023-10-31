export interface Ticket {
    //making sure properties from model match json type/object
    event_id: number;
    title: string;
    seat_numbers: number[];
    description: string;
    image: string;
    stadium_id: number;
    price: number;
}