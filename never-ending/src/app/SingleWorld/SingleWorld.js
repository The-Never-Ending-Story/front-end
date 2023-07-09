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
      .catch(err => {
        setError(true)
        setIsLoading(false);
      })
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Sorry the world could not be found</div>
  }

  const notables = world.notableItems
    ? world.notableItems.map((item, index) => (
      <NotableItem
        date={item.date}
        img={item.img}
        key={index}
        lore={item.lore}
        name={item.name}
        outcome={item.outcome}
        population={item.population}
        type={item.type}
      />
    ))
    : null;

  const history = world.history
    ? world.history.map((event, index) => (
      <p key={index}>{event}</p>
    ))
    : null;

  return (

    <section className="single-world-view">
      <h2>{world.name}</h2>
      <img src={world.img} alt={world.name} />
      <div className="world-details-box">
        <div className="longer-lore">LONG LORE: {world.longerLore}</div>
        <div className="bullet-points">
          <p>Magic: {world.magicTechnology.magic ? "Yes" : "No"}</p>
          <p>Genre: {world.magicTechnology.genre}</p>
          <p>Climate: {world.geoDynamics.climate}</p>
          <p>Size: {world.geoDynamics.size}</p>
          <p>Dominant Race: {world.dominantRace.name}</p>
          <p>Poltics: {world.dominantRace.politics}</p>
          <p>Alignment: {world.dominantRace.alignment}</p>
        </div>
      </div>
      <section className="notables-box">
        <h2>Noteworthy Highlights</h2>
        {notables}
      </section>
      <section className="history-box">
        <h2>History</h2>
        {history}
      </section>
    </section>
  );
};
