import "./App.css"
import Apitest from "./components/Apitest"
import React, { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setUsers(data)
      })
  }, [])

  return (
    <div className="App">
      <button>Fetch Random</button>
      <Apitest users={users} />
    </div>
  )
}

export default App
