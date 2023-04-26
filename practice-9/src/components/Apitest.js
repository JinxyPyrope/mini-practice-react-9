import React from "react"
import "./Apitest.css"

const Apitest = props => {
  const users = props.users
  console.log(props, users)

  return (
    <div className="data__container">
      {users.map(card => (
        <div className="data__container-card" key={card.id}>
          <div className="data__container-card__front-end__image">
            <img src={card.avatar} alt="test" title="More Information Here" />
          </div>
          <div className="data__container-card__front-end__text">
            <h4>Testing Title</h4>
            <p>Testing Text</p>
          </div>
        </div>
      ))}
    </div>
    // {/* <div className="data_card-container__back-end"></div> */}
  )
}

export default Apitest
