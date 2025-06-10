import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useParams, Link } from 'react-router-dom'

const UserDetails = () => {
  const { id } = useParams()

  const { users } = useContext(UserContext)

  const user = users.find(user => user.id === id)

  if (!user) {
    return <h1>Usuario no encontrado</h1>
  }


  return (
    <div>
      <h1>Detalles de Usuario</h1>
      <div>
        <p><strong>ID:</strong> {user.id} </p>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <div>
        <Link to={`/delete/${user.id}`}>Eliminar Usuario</Link>
        <Link to={`/edit/${user.id}`}>Editar Usuario</Link>
        <Link to="/">Volver a la lista de usuarios</Link>
      </div>
    </div>
  )
}

export default UserDetails