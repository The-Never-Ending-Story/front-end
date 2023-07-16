import React from "react"

export const Detail = ({ img, imgAlt, name, additionalDetails, lore }) => {

  return (
    <div className="single-det-container">
      <div>
        <img className="single-det-img" src={img} alt={imgAlt} />
      </div>
      <div>
        <h3>{name}</h3>
        {additionalDetails && additionalDetails.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
        <p>{lore}</p>
      </div>
    </div>
  )
}