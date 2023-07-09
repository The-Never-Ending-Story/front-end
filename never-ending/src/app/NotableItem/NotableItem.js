import React from "react";

export const NotableItem = ({name, type, lore, img, date}) => {

  return (
    <div className="notable-card">
      <h3 className="notable-name">{name}</h3>
      <img src={img}></img>
      <div>
        <p>type: {type}</p>
        <p>outcome: {outcome}</p>
        date
      </div>
      <p>lore:{lore}</p>
    </div>
  )
}