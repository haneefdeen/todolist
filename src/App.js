import React, { useState } from "react"

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleAddOrUpdate() {
    if (input.trim() === "") return;

    setTasks((prevTasks) =>
      editIndex !== null
        ? prevTasks.map((task, index) => (index === editIndex ? input : task))
        : [...prevTasks, input]
    );

    setInput("");
    setEditIndex(null);
  }

  function handleEdit(index) {
    setInput(tasks[index]);
    setEditIndex(index);
  }

  function handleDelete(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  return (
    <div className="app-container">
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleAddOrUpdate}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <div>
              <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
