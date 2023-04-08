import { Suspense, useEffect, useState, MouseEvent } from "react";
import Todo from "./Todo";
import Form from "./Form";
import axios from "axios";


interface data {
  _id: string,
  todo: string,
}

function App() {

  const [todos, setTodos] = useState([]);

  function handleDelete(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement
    axios.delete('http://localhost:3000/api/todos/' + target.id, {
      data: {
        _id: target.id,
      }
    })
  }

  useEffect(function () {
    axios.get('http://localhost:3000/api/todos').then(res => {
      setTodos(res.data);
    })
  }, [todos]);

  return (
    <div className="container">
      <Suspense fallback={<div>Loading ...</div>}>
        <Form />
        <div className="tasks">
          {todos.length > 0 && todos.map((todo: data) => {
            return (
              <Todo key={todo._id} todo={todo.todo} id={todo._id} handleDelete={handleDelete} />
            )
          })}
        </div>
      </Suspense>
    </div>
  )
}

export default App;
