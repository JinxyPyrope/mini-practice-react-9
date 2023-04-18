import React from "react"
import "./Apitest.css"
import { data } from "./data.js"

const listData = data.map(test => (
  <div className="data__container">
    <img />
    <h4>Testing Title</h4>
    <p>Testing Text</p>
  </div>
))

const Apitest = () => {
  // const [data, setData] = useState([])

  return (
    <div className="data__container">
      <img />
      <h4>Testing Title</h4>
      <p>Testing Text</p>
    </div>
  )
}

export default Apitest
