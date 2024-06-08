import axios from "axios";
import { TodoType } from "../../types";

// En un paso más, extraemos la lógica fetching de datos del hook, que se encargaría solo de hacer la asignación de datos al estado

export const fetchTodos = () => {
    return axios
        .get<TodoType[]>('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.data)
}