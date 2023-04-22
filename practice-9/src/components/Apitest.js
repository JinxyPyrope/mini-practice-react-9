import React, { useState, useEffect } from "react"
import "./Apitest.css"

const Apitest = () => {
  const [users, setUsers] = useState([])

  // const fetchUserData = () => {
  //   fetch("https://random-data-api.com/api/users/random_user?size=10")
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       setUsers({ data })
  //       Object.entries(users).map(x => console.log(x))
  //     })
  //     .catch(error => console.log(error))
  // }

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setUsers(data)
        Object.entries(users).map(x => console.log(x))
      })
      .catch(error => console.log(error))
  }, [users])

  return (
    <div className="data__card-container">
      <div className="data_card-container__front-end">
        {/* {Object.entries(users).map((list, index) => (
          <img src={list.avatar} alt="test" title="More Information Here" />
        ))} */}
        {/* <img alt="test" title="More Information Here" />
        <h4>Testing Title</h4>
        <p>Testing Text</p> */}
      </div>
      {/* <div className="data_card-container__back-end"></div> */}
    </div>
  )
}

export default Apitest
