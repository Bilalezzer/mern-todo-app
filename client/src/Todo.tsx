import { MouseEvent } from "react"

interface Todo {
    todo: string,
    handleDelete: (e: MouseEvent<HTMLButtonElement>) => void,
    id: string,
}

export default function Todo({ todo, handleDelete, id }: Todo) {
    return (
        <div className="task">
            {todo}
            <button id={id} onClick={handleDelete} className="btn">Delete Task</button>
        </div>
    )
}