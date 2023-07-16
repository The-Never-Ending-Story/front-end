import React, { useEffect, useState } from "react";
import './SingleWorld.css'
import { useParams } from "react-router-dom";
import { getSingleWorldData } from "../../apiCalls";
import { Inhabitant } from "../Inhabitant/Inhabitant";
import { Location } from "../Location/Location";
import { Character } from "../Character/Character";
import { Event } from "../Event/Event";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Error } from "../Error/Error";

export const SingleWorld = () => {
  const { id } = useParams();
  const [world, setWorld] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [wrongPath, setWrongPath] = useState(false);
  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    getSingleWorldData(id)
      .then((data) => {
        setWorld(data);
        setIsLoading(false);
      })
      .catch((res) => {
        if (res.message === "404") {
          setWrongPath(true)
          setError(false)
        } else {
          setError(true)
          setWrongPath(false)
        }
        setIsLoading(false);
      })
  }, [id]);

  if (isLoading) {
    return <LoadingIcon />;
  } else if (error) {
    return <Error />;
  } else if (wrongPath) {
    return <PageNotFound />
  }

  const declareUnknown = (subject) => {
    return (
      <p>This world's {subject} is unknown.</p>
    )
  }

  const listDetails = (list) => {
     let sentenceFragment = '';

    if (list.length > 1) {
      let lastItem = list.pop();
      sentenceFragment = list.join(', ') + ' and ' + lastItem;
    } else if (list.length === 1) {
      sentenceFragment = list[0];
    }

    return sentenceFragment.charAt(0).toUpperCase() + sentenceFragment.slice(1).toLowerCase();
  }

  const inhabitants =
    world.species ? world.species.map(inhabitant => (
      <div className="single-det-wrapper" key={inhabitant.id}>
        <Inhabitant
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
      <div className="single-det-wrapper" key={location.id}>
        <Location
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
      <div className="single-det-wrapper" key={character.id}>
        <Character
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
      <div className="single-det-wrapper" key={event.id}>
        <Event
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