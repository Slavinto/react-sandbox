import { useState } from "react";

import Todo from "../todo/todo.component";

const UserefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <Todo />}
      UserefExample3
      <button
        className="btn btn-primary"
        onClick={() => {
          setShowTodo(!showTodo);
        }}
      >
        Toggle Todo
      </button>
    </div>
  );
};

export default UserefExample3;
