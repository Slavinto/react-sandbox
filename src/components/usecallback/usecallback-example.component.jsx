import React, { useState, useCallback } from "react";

const UsecallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => {
      return [...prevState, "Some Task"];
    });
  }, [setTasks]);
  console.log(tasks);
  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((t, idx) => {
        return <p key={idx}>{t}</p>;
      })}
    </div>
  );
};

export const Button = React.memo(({ addTask }) => {
  console.log("Button rendered");
  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});

export default UsecallbackExample;
