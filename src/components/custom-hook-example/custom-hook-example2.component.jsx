import useLocalStorage from "../../hooks/uselocalstorage/uselocalstorage.hook";

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <form onSubmit={onSubmit} className="w-50">
      <div className="mb-3">
        <label htmlFor="form-label">Task</label>
        <input
          className="form-control"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CustomHookExample2;
