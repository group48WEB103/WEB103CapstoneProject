export interface Stadium {
    //making sure properties from model match json type/object
    location: string;
    title: string;
    description: string;
    capacity: number;
    image: string;
    gallery: string[];
}