import "./App.css"
import Apitest from "./components/Apitest"
import React, { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <div className="btn-container">
        <button onClick={fetchData}>Fetch Random</button>
      </div>

      <Apitest users={users} />
    </div>
  )
}

export default App
