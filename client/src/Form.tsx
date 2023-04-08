import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

export default function Form() {

    const [input, setInput] = useState('');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        axios.post('http://localhost:3000/api/todos', {
            todo: input,
        })
        setInput('');
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" className="input" value={input} required />
            <button type="submit" className="btn">Add Task</button>
        </form>
    )
}