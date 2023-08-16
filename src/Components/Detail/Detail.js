import React from "react";

export const Detail = ({ item, additionalDetails }) => {
  const { img, imgAlt, name, lore, id } = item;

  return (
    <div className="single-det-wrapper" key={id}>
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
    </div>
  );
};