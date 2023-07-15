import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleWorldData } from "../../apiCalls";
import { Inhabitant } from "../Inhabitant/Inhabitant";
import { NotableItem } from "../NotableItem/NotableItem";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";
import { Error } from "../Error/Error";
import './SingleWorld.css'

export const SingleWorld = () => {
  const { id } = useParams();
  const [world, setWorld] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    getSingleWorldData(id)
      .then((data) => {
        console.log(data)
        setWorld(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(true)
        setIsLoading(false);
      })
  }, [id]);

  if (isLoading) {
    return <LoadingIcon />;
  } else if (error) {
    return <Error />;
  }

  // const highlights = world.notableItems
  //   ? world.notableItems.map((item, index) => (
  //     <NotableItem
  //       key={index}
  //       imagePositon={index % 2 === 0 ? 'left' : 'right'}
  //       name={item.name}
  //       type={item.type}
  //       lore={item.lore}
  //       img={item.img}
  //       race={item.race}
  //       alignment={item.alignment}
  //       date={item.date}
  //       outcome={item.outcome}
  //       population={item.population}
  //     />
  //   ))
  //   : null;



  const history = world.history || 'This world\'s history is unknown'

  // {img, imagine, name, alignment, politics, lore}
  const inhabitants = 
    world.species? world.species.map( inhabitant => (
      <Inhabitant 
       key={inhabitant.id}
       imgAlt={inhabitant.imagine}
       img={inhabitant.img}
       name={inhabitant.name}
       alignment={inhabitant.alignment}
       politics={inhabitant.politics}
       lore= {inhabitant.lore}
        />
    )) : null;

  

  const listDetails = (list) => {
    return list.reduce((acc, cV, currentIndex) => {
      if (currentIndex != (list.length - 1)) {
        acc += `${cV}, `
      } else {
        acc += `and ${cV}`
      }
      return acc;
    }, '')
  }

  return (

    <section className="single-world-view">
      <img className="world-img" src={world.img.landscape} alt={`${world.name}`} />
      <h1>{world.name}</h1>
      <p>{world.description}</p>

      <h3>Geodynamics</h3>
      <p>Size: {world.geoDynamics.size}</p>
      <p>Shape: {world.geoDynamics.shape}</p>
      <p>Climate: {world.geoDynamics.climate}</p>

      <h3>Magic</h3>
      <p>Magic Level: {world.magicTechnology.magicLvl}</p>
      <p>Magic: {listDetails(world.magicTechnology.magic)}</p>
      <h3>Technology</h3>
      <p>Technology Level: {world.magicTechnology.techLvl}</p>
      <p>Technology: {listDetails(world.magicTechnology.technology)}</p>

      <h3>Inhabitants</h3>
      {inhabitants}
      <h3>Locations</h3>
      <h3>Characters</h3>
      <h3>Events</h3>
      <h3>History</h3>

    </section>
  );
};

