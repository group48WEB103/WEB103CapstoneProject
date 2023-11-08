export interface Stadium {
    id?: number;
    location: string;
    title: string;
    description: string;
    capacity: number;
    image: string;
    gallery: string[];
};

export interface Event {
    id: number;
    stadium_id: number;
    title: string;
    description: string;
    performer: string;
    image: string;
};

export interface Ticket {
    id?: number;
    event_id: number;
    title: string;
    seat_numbers: number[];
    description: string;
    performer: string;
    image: string;
    stadium_id: number;
    price: number;
};

export interface Customer {
    id?: number;
    name: string;
    email: string;
    password: string;
    tickets: number[];
};