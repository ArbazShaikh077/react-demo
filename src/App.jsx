import { useState } from "react";
import "./App.css";

let id = 1;
function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      name: "first todo",
      description: "first description",
    },
  ]);

  return (
    <>
      <button
        onClick={() => {
          setTodo([
            ...todo,
            {
              id: id++,
              name: "new name",
              description: "new description",
            },
          ]);
        }}
      >
        Click
      </button>
      {todo.map((todo) => (
        <Todo key={todo.id} name={todo.name} description={todo.description} />
      ))}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <br />
      <h2>{props.description}</h2>
    </div>
  );
}
export default App;
