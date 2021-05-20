import { crudder } from "../BaseClient";

export interface Todo {
    userId: number;
    id?: number;
    title: string;
    completed: boolean;
}

const BaseClient = crudder<Todo>("https://jsonplaceholder.typicode.com");

export const TodosClient = BaseClient("todos");
