import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getSingleWorldData } from "../../apiCalls";
import { NotableItem } from "../NotableItem/NotableItem";

export const SingleWorld = () => {
  const { id } = useParams();
  const [world, setWorld] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    getSingleWorldData(id)
      .then((data) => {
        console.log(data.world)
        setWorld(data.world);
        setIsLoading(false);
      })
      .catch( err => {
        setError(true)
        setIsLoading(false);
      })
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if(error){
    return <div>Sorry the world could not be found</div>
  }

  const notables = world.notableItems
    ? world.notableItems.map((item, index) => (
      <NotableItem
        key={index}
        name={item.name}
        lore={item.lore}
        type={item.type}
        img={item.img}
        outcome={item.outcome}
        population={item.population}
      />
    ))
    : null;

  return (

    <section className="single-world-view">
      <h2>{world.name}</h2>
      <img src={world.img} alt={world.name} />
      <div className="world-details-box">
        <div className="longer-lore">LONG LORE: {world.longerLore}</div>
        <div className="bullet-points">
          <p>Magic: {world.magicTechnology.magic? "Yes": "No"}</p>
          <p>Genre: {world.magicTechnology.genre}</p>
          <p>Climate: {world.geoDynamics.climate}</p>
          <p>Size: {world.geoDynamics.size}</p>
          <p>Dominant Race: {world.dominantRace.name}</p>
          <p>Poltics: {world.dominantRace.poltics}</p>
          <p>Alignment: {world.geoDynamics.alignment}</p>
        </div>
      </div>
      <section className="notables-box">{notables}</section>
      <section className="history-box">History</section>
    </section>
  );
};
