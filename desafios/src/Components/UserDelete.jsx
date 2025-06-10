import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useParams, useNavigate } from 'react-router-dom'
const UserDelete = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { users, handleDeleteUser } = useContext(UserContext)

  const userToDelete = users.find(user => user.id === id)

  if (!userToDelete) {
    return <h1>Usuario no encontrado</h1>
  }

  const handleDelete = () => {
    handleDeleteUser(id)
    navigate('/')
  }

  return (
    <div>
      <h1>Eliminar usuario: {userToDelete.name}</h1>
      <p>¿Estás seguro de que deseas eliminar este usuario?</p>
      <button onClick={handleDelete}>Si, Eliminar</button>
    </div>
  )
}

export default UserDelete