import React from "react";
import './NotableItem.css'

export const NotableItem = ({name, type, lore, img, date, outcome}) => {

  return (
    <div className="notable-card">
      <h3 className="notable-name">{name}</h3>
      <img src={img}></img>
      <div>
        <p>type: {type}</p>
        <p>outcome: {outcome}</p>
        <p>date: {date}</p>
      </div>
      <p>lore:{lore}</p>
    </div>
  )
}