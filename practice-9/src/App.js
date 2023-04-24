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
        console.log(data)
        setUsers(data)
      })
  }, [])

  
  return (
    <div className="App">
      <Apitest />
      
    </div>
  )
}

export default App
