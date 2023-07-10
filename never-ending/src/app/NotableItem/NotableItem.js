import React from "react";
import './NotableItem.css'

export const NotableItem = ({ imagePosition, name, type, lore, img, race, date, outcome, alignment, population }) => {

  let optionalFields;
  if (type === "person") {
    optionalFields = (
      <div>
        <p>race: {race}</p>
        <p>alignment: {alignment}</p>
      </div>
    );
  } else if (type === "event") {
    optionalFields = (
      <div>
        <p>date: {date}</p>
        <p>outcome: {outcome}</p>
      </div>
    );
  } else if (type === "place") {
    optionalFields = <p>population: {population}</p>;
  }

  return (
    <div className="notable-card">
      <div className="notable-wrapper">
        <img src={img} className={`notable-img img-${imagePosition}`} alt={`Image of ${name}`} />
        <div className="notable-text">
          <h3 className="notable-name">{name}</h3>
          <p>type: {type}</p>
          {optionalFields}
          <p>{lore}</p>
        </div>
      </div>
    </div>
  )
}