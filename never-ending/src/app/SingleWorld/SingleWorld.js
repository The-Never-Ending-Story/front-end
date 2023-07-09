import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getSingleWorldData } from "../../apiCalls";
import { NotableItem } from "../NotableItem/NotableItem";

export const SingleWorld = () => {
  const {id} = useParams()
  const [world, setWorld] = useState({})
  const notables = world.notableItems.map(item => {
    const {name, lore, type, img, outcome, population} = item
    return ( <NotableItem 
              name = {name}
              lore = {lore}
              type = {type}
              img = {img}
              outcome = {outcome}
              population = {population} />
      )
    }
  )

  useEffect(() => {
    getSingleWorldData(id)
    .then(json => {
      setWorld(json)
    })
  }, [])
  
  return (
    // this lay out is janky as hell and theres no css but it should display
    <section className="single-world-view">
      <h2>{world.name}</h2>
      <img src={world.img}></img>
      <div className="world-details-box">
        <div className="longer-lore">{world.longerLore}</div>
        <div className="bullet-points"></div>

      </div>
      <section className="notables-box">
        {notables}
      </section>
      <section className="history-box">
      </section>
    </section>
  )
}