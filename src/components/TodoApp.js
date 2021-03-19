import React, { useState } from "react";
import "./todoapp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.random() * 1000,
        value: task,
        isCompleted: false,
      };
      setTaskList([...tasklist, taskDetails]);
    }
  };
  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id !== id));
  };
  const taskCompleted = (e, id) => {
    e.preventDefault();
    const element = tasklist.findIndex((t) => t.id === id);
    const newtasklist = [...tasklist];
    newtasklist[element] = { ...newtasklist[element], isCompleted: true };
    setTaskList(newtasklist);
  };
  console.log("tasklisst ", tasklist);
  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Add task here..."
      />
      <button className="add-btn" onClick={AddTask}>
        Add
      </button>
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li className={t.isCompleted ? "crossText" : "listitem"}>
              {t.value}
              <button
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                complete
              </button>
              <button className="delete" onClick={(e) => deletetask(e, t.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default TodoApp;
