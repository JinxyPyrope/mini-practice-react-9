import React, { useEffect, useState } from "react"

const Apitest = () => {
  const [data, setData] = useState([])

  return (
    <>
      <button onClick={() => console.log("Button Works")}>Fetch Random</button>
    </>
  )
}

export default Apitest
