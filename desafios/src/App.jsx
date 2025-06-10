import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './Components/UserList'
import UserForm from './Components/UserForm'
import UserDetails from './Components/UserDetails'
import UserEdit from './Components/UserEdit'
import UserDelete from './Components/UserDelete'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <h1>Gestión de Usuarios</h1>
      <p>Aplicación para gestionar usuarios</p>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/create" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserEdit />} />
        <Route path="/delete/:id" element={<UserDelete />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App