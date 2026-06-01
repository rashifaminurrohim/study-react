import { useState } from "react";

export default function Latihan1() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), task: task, status: false },
    ]);
  }

  function handleDeleteTask(id) {
    console.log(id);
    if (id) {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <AddTask addtask={handleAddTask} />
      {tasks.map((t) => (
        <Tasklist
          key={t.id}
          id={t.id}
          task={t.task}
          status={t.status}
          deleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}

function AddTask({ addtask }) {
  const [task, setTask] = useState("");

  function handleSubmit() {
    if (!task.trim()) return;
    addtask(task);
    setTask("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="task"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

function Tasklist({ id, task, status, deleteTask }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "gray",
        margin: "1rem",
        padding: "0.5rem",
        justifyContent: "space-between",
      }}
    >
      <p>{task}</p>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
}
