import { useState } from 'react'
import UserList from './UserList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserList/>
    </>
  )
}

export default App