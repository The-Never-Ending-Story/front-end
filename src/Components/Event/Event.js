import React from "react";
import './Event.css'

export const Event = ({ img, imgAlt, name, time, age, lore }) => {
  return (
    <div className="single-det-container">
      <div>
        <img className="single-det-img" src={img} alt={imgAlt} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{`${time} in the age of ${age}`}</p>
        <p>{lore}</p>
      </div>
    </div>
  )
}
