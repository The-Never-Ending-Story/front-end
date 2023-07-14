import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        setWorld(data);
        console.log(data)
        setIsLoading(false);
      })
      .catch(err => {
        setError(true)
        setIsLoading(false);
      })
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Sorry the world could not be found</div>
  }
  
  const highlights = world.notableItems
    ? world.notableItems.map((item, index) => (
      <NotableItem
        key={index}
        imagePositon={index % 2 === 0 ? 'left' : 'right'}
        name={item.name}
        type={item.type}
        lore={item.lore}
        img={item.img}
        race={item.race}
        alignment={item.alignment}
        date={item.date}
        outcome={item.outcome}
        population={item.population}
      />
    ))
    : null;

  const history = world.history || 'This world\'s history is unknown' 

  return (

    <section className="single-world-view">
      <div className="world-detail-wrapper">
        <img className="world-img" src={world.img} alt={`${world.name}`} />
        <div className="world-details-box">
          <h1>{world.name}</h1>
          <div className="bullet-points">
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
                  <td>{world.magicTechnology.technology}</td>
                  <td>{world.magicTechnology.genre}</td>
                </tr>
              </tbody>
            </table>
            <table className="center-table">
              <thead>
                <tr>
                  <th>Notable Races</th>
                  <th>Alignment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{world.species.name}</td>
                  <td>{world.species.alignment}</td>
                </tr>
                <tr>
                  <td className="politics-cell" colSpan="2">Politics: {world.species.politics}</td>
                </tr>
              </tbody>
            </table>
            <p className="longer-lore">
              {world.longerLore}
            </p>
          </div>
        </div>
      </div>
      <section className="notables-box">
        <h2>Noteworthy Highlights</h2>
        {/* {notables} */}
      </section>
      <section className="history-box">
        <h2>History</h2>
        {history}
      </section>
    </section>
  );
};

