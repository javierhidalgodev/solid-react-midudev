// Una sola responsabilidad

import { useFetchTodo } from "./hooks/useFetchTodo";

// Hacemos el fetching de datos fuera, y lo importamos
// El componente solo se encarga de renderizar el resultado

const TodoList = () => {
    const { data, isFetching } = useFetchTodo();

    if (isFetching) <p>Loading... </p>

    return (
        <ul>
            {
                data.map((todo) => {
                    return (
                        <li>
                            <span>{todo.id}: </span>
                            <span>{todo.title}</span>
                        </li>
                    );
                })
            };
        </ul>
    )
};

export default TodoList;