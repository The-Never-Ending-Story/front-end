import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getSingleWorldData } from "../../apiCalls";

export const SingleWorld = () => {
  const {id} = useParams()
  const [world, setWorld] = useState({})

  useEffect(() => {
    getSingleWorldData(id)
    .then(json => {
      setWorld(json)
    })
  }, [])
  
  return (
    <section className="single-world-view">
      <h2>{world.name}</h2>
      <img src={world.img}></img>
      <div className="world-details">
        <div className="longer-lore">{world.longerLore}</div>
        <div className="bullet-points"></div>

      </div>
    </section>
  )
}