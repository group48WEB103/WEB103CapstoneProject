export interface Customer {
    //making sure properties from model match json type/object
    name: string;
    email: string;
    password: string;
    tickets: number[];
}