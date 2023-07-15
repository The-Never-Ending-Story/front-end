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
  const [error, setError] = useState(false);
  const [currentTab, setCurrentTab] = useState('');

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
      <div className="single-det-wrapper">
      <Inhabitant
        key={inhabitant.id}
        img={inhabitant.img}
        imgAlt={inhabitant.imagine}
        name={inhabitant.name}
        alignment={inhabitant.alignment}
        politics={inhabitant.politics}
        lore={inhabitant.lore}
      />
      </div>
    )) : declareUnknown('inhabitants');


  const locations =
    world.locations ? world.locations.map(location => (
      <div className="single-det-wrapper">
      <Location
        key={location.id}
        img={location.img}
        imgAlt={location.imagine}
        name={location.name}
        climate={location.climate}
        lore={location.lore}
      />
      </div>
    )) : declareUnknown('locations');

  const characters =
    world.characters ? world.characters.map(character => (
      <div className="single-det-wrapper">
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
      </div>
    )) : declareUnknown('locations');

  const events =
    world.events ? world.events.map(event => (
      <div className="single-det-wrapper">
      <Event
        key={event.id}
        img={event.img}
        imgAlt={event.imagine}
        name={event.name}
        time={event.time}
        age={event.age}
        lore={event.lore}
      />
      </div>
    )) : declareUnknown('events');

  const history =
      <div className="single-det-wrapper">
        {world.lore ? world.lore.map((par, index) => <p key={index}>{par}</p>) : declareUnknown('history')}
      </div>
    ;

    const tabContent = {
      Inhabitants: inhabitants,
      Locations: locations,
      Characters: characters,
      Events: events,
      History: history
    };

  return (

    <section className="single-world-view">
    <div className="single-top">
      <img className="world-img" src={world.img.landscape} alt={`${world.name}`} />
      <h1>{world.name}</h1>
    </div>
    <div className="single-top-wrapper">
      <div className="single-geo">
        <p><span className="attr-name">Shape </span>  {world.geoDynamics.shape}</p>
        <p><span className="attr-name">Size: </span> {world.geoDynamics.size}</p>
        <p><span className="attr-name">Climate: </span> {world.geoDynamics.climate}</p>
      </div>
      <div className="single-mag-tech">
        <p><span className="attr-name">Magic: </span> {listDetails(world.magicTechnology.magic)}</p>
        <p><span className="attr-name">Level: </span> {world.magicTechnology.magicLvl}</p>
      </div>
      <div className="single-mag-tech">
        <p><span className="attr-name">Techonology: </span> {listDetails(world.magicTechnology.technology)}</p>
        <p><span className="attr-name">Level: </span> {world.magicTechnology.techLvl}</p>
      </div>
      <p>{world.description}</p>
    </div>
    <div className="tabs">
      {Object.keys(tabContent).map((tabName) => (
        <button 
          key={tabName} 
          onClick={() => setCurrentTab(tabName)}
          aria-label={`Open ${tabName} tab`}
          tabIndex={0}
          className={currentTab === tabName ? 'tab-active' : 'tab'}
        >
          {tabName}
        </button>
      ))}
    </div>
    <div className="tab-content">
      {currentTab && tabContent[currentTab]}
    </div>
  </section>
  );
};