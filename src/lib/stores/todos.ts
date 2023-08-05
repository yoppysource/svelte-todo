import { writable } from "svelte/store";


const todos = writable<Model.Todo[]>([]);

export default todos;