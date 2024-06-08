// Nuestros componentes deberían de depender de abstracciones y no de implementaciones concretas

// import useSWR from "swr";
import { ResponseType } from "../types";
import { useData } from "./hooks/useData";

// En este caso el fetcher podría tener la estructura que quisiera y obtener los datos de la forma que quisiera, por la abstracción de la implementación

// const fetcher = async (url: string) => {
//     const url = 'https://jsonplaceholder.typicode.com/todos'
//     const res = await fetch(url)
//     return res.json()
// };

// const fetcher = async (): Promise<ResponseType[]> => {
//     return [{ id: 1, title: 'Hello'}, { id: 2 , title: 'World'}]
// }

const fetcher = async (): Promise<ResponseType[]> => {
    const posts = localStorage.getItem('posts')
    return posts ? JSON.parse(posts) : []
}

const Todo = () => {
    // const { data } = useSWR('https://...', fetcher);
    const { data } = useData<ResponseType[]>({ key: '/todos', fetcher })

    if (!data) return <p>Loading...</p>;

    return (
        <ul>
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data.map((todo: any) => {
                    return (
                        <li>
                            <span>{todo.id}</span>
                            <span>{todo.title}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default Todo;