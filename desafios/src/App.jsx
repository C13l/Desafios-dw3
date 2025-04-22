import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <h1>--- TO DO NOW ---</h1>
      <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Agregue una nueva tarea" aria-label="Agregue una nueva tarea" aria-describedby="button-addon2" />
      <button class="btn btn-secondary" type="button" id="button-addon2">Enter</button>
    </div>
    </>
  )
}

export default App
