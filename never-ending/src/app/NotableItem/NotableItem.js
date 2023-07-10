import React from "react";
import './NotableItem.css'

export const NotableItem = ({name, type, lore, img, race, date, outcome, alignment, population}) => {

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
        <p>outcome: {outcome}</p>
        <p>date: {date}</p>
      </div>
    );
  } else if (type === "place") {
    optionalFields = <p>population: {population}</p>;
  }

  return (
    <div className="notable-card">
      <h3 className="notable-name">{name}</h3>
      <img src={img} className={`notable-img-${imagePosition}`} alt={`Image of ${name}`} />
      <div>
        <p>type: {type}</p>
        {optionalFields}
      </div>
      <p>lore: {lore}</p>
    </div>
  )
}