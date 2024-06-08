import { useEffect, useState } from "react" ;
import { fetchTodos } from "../services/fetchTodos";
import { TodoType } from "../../types";

// En un paso más, extraemos la lógica fetching de datos del hook, que se encargaría solo de hacer la asignación de datos al estado

export const useFetchTodo = () => {
    const [data, setData] = useState<TodoType[]>([]);
    const [isFetching, setIsFetching] = useState(true) ;

    useEffect(() => {
        fetchTodos()
            .then(todos => setData(todos))
            .finally(() => setIsFetching(false))
    }, [])

    return { data, isFetching };
}