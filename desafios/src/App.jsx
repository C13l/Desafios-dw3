import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import './App.css'

function App() {
  const[task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () =>{
    if(newTask.trim() !== ""){
      setTask([...task, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updateTask = task.filter((_, i) => i !== index);
    setTask(updateTask);
  };

  return (
    <>
    <div className="container text-center mt-5" style={{ maxWidth: "600px" }}>
      <h1 className="text-white mb-4">--- TO DO NOW ---</h1>
      <div className="input-group mb-3">
      <input type="text"
      className="form-control"
      placeholder="Agregue una nueva tarea"
      aria-label="recipient's username"
      aria-describedby='button-addon2'
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="btn btn-dark" type="button" id="button-addon2" onClick={addTask}>Agregar</button>
    </div>
    
    <hr className='text-white'/>
    
    <ul className='list-group'>
      {task.map((task, index) =>(
        <li
        key={index}
        className='list-group-item d-flex justify-content-between align-items-center bg-dark text-white mb-2'
        >
          {task}
          <button className='btn btn-outline-light btn-sm' onClick={() => deleteTask(index)}>
            <i className="bi bi-trash"></i>
          </button>
        </li>
      ))}
    </ul>
    </div>
    </>
  );
};



export default App
