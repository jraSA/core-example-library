import { crudder } from "../BaseClient";

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: string[];
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

const Base = crudder<User>("https://jsonplaceholder.typicode.com");

export const UsersClient = Base("users");
