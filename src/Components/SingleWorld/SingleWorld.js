import React, { useEffect, useState } from "react";
import './SingleWorld.css'
import { useParams } from "react-router-dom";
import { getSingleWorldData } from "../../apiCalls";
import { Inhabitant } from "../Inhabitant/Inhabitant";
import { Location } from "../Location/Location";
import { Character } from "../Character/Character";
import { Event } from "../Event/Event";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";
import { Error } from "../Error/Error";

export const SingleWorld = () => {
  const { id } = useParams();
  const [world, setWorld] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    getSingleWorldData(id)
      .then((data) => {
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

  const declareUnknown = (subject) => {
    return (
      <p>This world's {subject} is unknown.</p>
    )
  }

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

  const inhabitants =
    world.species ? world.species.map(inhabitant => (
      <Inhabitant
        key={inhabitant.id}
        img={inhabitant.img}
        imgAlt={inhabitant.imagine}
        name={inhabitant.name}
        alignment={inhabitant.alignment}
        politics={inhabitant.politics}
        lore={inhabitant.lore}
      />
    )) : declareUnknown('inhabitants');


  const locations =
    world.locations ? world.locations.map(location => (
      <Location
        key={location.id}
        img={location.img}
        imgAlt={location.imagine}
        name={location.name}
        climate={location.climate}
        lore={location.lore}
      />
    )) : declareUnknown('locations');

  const characters =
    world.characters ? world.characters.map(character => (
      <Character
        key={character.id}
        img={character.img}
        imgAlt={character.imagine}
        name={character.name}
        species={character.species}
        alignment={character.alignment}
        age={character.age}
        location={character.location}
        lore={character.lore}
      />
    )) : declareUnknown('locations');

  const events =
    world.events ? world.events.map(event => (
      <Event
        key={event.id}
        img={event.img}
        imgAlt={event.imagine}
        name={event.name}
        time={event.time}
        age={event.age}
        lore={event.lore}
      />
    )) : declareUnknown('events');

  const history =
    world.lore ? world.lore.map((par, index) => <p key={index}>{par}</p>) : declareUnknown('history');

  return (

    <section className="single-world-view">
      <div className="single-top">
        <img className="world-img" src={world.img.landscape} alt={`${world.name}`} />
        <h1>{world.name}</h1>
      </div>
      <div className="single-top-wrapper">
        <div className="single-geo">
          <p><span className="attr-name">Shape</span>: {world.geoDynamics.shape}</p>
          <p><span className="attr-name">Size</span>: {world.geoDynamics.size}</p>
          <p><span className="attr-name">Climate</span>: {world.geoDynamics.climate}</p>
        </div>
        <div className="single-mag-tech">
          <p><span className="attr-name">Magic</span>: {listDetails(world.magicTechnology.magic)}</p>
          <p><span className="attr-name">Level</span>: {world.magicTechnology.magicLvl}</p>
        </div>
        <div className="single-mag-tech">
          <p><span className="attr-name">Techonology</span>: {listDetails(world.magicTechnology.technology)}</p>
          <p><span className="attr-name">Level</span>: {world.magicTechnology.techLvl}</p>
        </div>
        <p>{world.description}</p>
      </div>
      <div className="single-det-wrapper">
        <h2>Inhabitants</h2>
        {inhabitants}
      </div>

      <div className="single-det-wrapper">
        <h3>Locations</h3>
        {locations}
      </div>
      <div className="single-det-wrapper">
        <h3>Characters</h3>
        {characters}
      </div>
      <div className="single-det-wrapper">
        <h3>Events</h3>
        {events}
      </div>
      <div className="single-det-wrapper">
        <h3>History</h3>
        {history}
      </div>
    </section>
  );
};

