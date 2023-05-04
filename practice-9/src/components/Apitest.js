import React from "react"
import "./Apitest.css"

const Apitest = props => {
  const users = props.users
  // console.log(props, users)

  return (
    <div className="data__container">
      {users.map(card => (
        <div className="data__container-card" key={card.id}>
          <div className="data__container-card__front-end">
            <img src={card.avatar} alt="test" title="More Information Here" />
           
          </div>
          <div className="data__card-container__back-end">
            <h4>More Information Here</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Apitest
