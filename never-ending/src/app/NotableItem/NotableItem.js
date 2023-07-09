import React from "react";

export const NotableItem = ({name, type, lore, img, date}) => {
/// layout is also super janky since i wasn't able to run the App in browser. 
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