import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getSingleWorldData } from "../../apiCalls";
import { NotableItem } from "../NotableItem/NotableItem";
import './SingleWorld.css'

export const SingleWorld = () => {
  const { id } = useParams();
  const [world, setWorld] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    getSingleWorldData(id)
      .then((data) => {
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

  const history = world.history ? world.history.map((event, index) => (
    <p key={index}>{event}</p>
  ))
    : null;

  return (

    <section className="single-world-view">
      <div className="world-detail-wrapper">
        <img className="world-img" src={world.img} alt={`Image of %{world.name}`} />
        <div className="world-details-box">
          <h1>{world.name}</h1>
          <div className="bullet-points">
            <p>Size: {world.geoDynamics.size}</p>
            <p>Climate: {world.geoDynamics.climate}</p>
            <table className="center-table">
              <thead>
                <tr>
                  <th>Magic</th>
                  <th>Technology level</th>
                  <th>Genre</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{world.magicTechnology.magic ? "Yes" : "No"}</td>
                  <td>{world.magicTechnology.technologyLevel}</td>
                  <td>{world.magicTechnology.genre}</td>
                </tr>
              </tbody>
            </table>
            <table className="center-table">
              <thead>
                <tr>
                  <th>Dominant Race</th>
                  <th>Alignment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{world.dominantRace.name}</td>
                  <td>{world.dominantRace.alignment}</td>
                </tr>
                <tr>
                  <td className="politics-cell" colSpan="2">Politics: {world.dominantRace.politics}</td>
                </tr>
              </tbody>
            </table>
 
            <p className="longer-lore">
              {/* {world.longerLore} */}
              Mythos, a captivating fantasy realm, mesmerizes with its ethereal beauty. Towering spires reach towards a resplendent sky, where swirling constellations cast a celestial glow. Lush forests breathe with magical creatures, their melodious whispers harmonizing with the babbling rivers. Ancient ruins, adorned with intricate runes, hint at a forgotten history. Mythical beings, from elegant unicorns to majestic dragons, roam freely, their presence igniting wonder in all who encounter them. Sorcerers, wielding arcane powers, craft spells that dance in kaleidoscopic hues. In Mythos, dreams intertwine with reality, and every step unravels untold mysteries, immersing explorers in a realm where enchantment reigns supreme.
              </p>
          </div>
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