import React, {useEffect, useState, useContext} from 'react'
import { UserContext } from '../context/UserContext'


const UserForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const {handleCreateUser} = useContext(UserContext)

    const hundleSubmit = () =>{
        const newUser = {
            name: name,
            email: email
        }
        handleCreateUser(newUser)
        setName('')
        setEmail('')
    }
  return (
    <div>
      <h2>Agregar Usuario</h2>
      <div>
        <label>Nombre:</label>
        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Nombre de Usuario'></input>
      </div>
      <button onClick={hundleSubmit}>Crear Usuario</button>
    </div>
  )
}

export default UserForm
