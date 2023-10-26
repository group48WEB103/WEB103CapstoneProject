export interface Stadium {
    id?: number;
    location: string;
    title: string;
    description: string;
    capacity: number;
    image: string;
}

export interface Event {
    id?: number;
    location_id: number;
    title: string;
    description: string;
    performer: string;
    image: string;
}

export interface Ticket {
    id?: number;
    event_id: number;
    title: string;
    seat_number: number;
    description: string;
    performer: string;
    image: string;
    stadium_id: number;
}

export interface Bundle {
    id?: number;
    ticket_id: number;
    title: string;
    image: string;
}

export interface Customer {
    id?: number;
    name: string;
    ticket_id: number;
    bundle_id: number;
}