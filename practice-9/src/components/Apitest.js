import React, { useState, useEffect } from "react"
import "./Apitest.css"

const Apitest = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className="data__card-container">
      <div className="data_card-container__front-end">
        <img alt="test" title="More Information Here" />
        <h4>Testing Title</h4>
        <p>Testing Text</p>
      </div>
      {/* <div className="data_card-container__back-end"></div> */}
    </div>
  )
}

export default Apitest
