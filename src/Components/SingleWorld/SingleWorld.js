import React, { useEffect, useState } from "react";
import './SingleWorld.css';
import { useParams } from "react-router-dom";
// import { getSingleWorldData } from "../../apiCalls";
import { Detail } from "../Detail/Detail";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Error } from "../Error/Error";
import { DetailCarousel } from "../Detail/DetailCarousel";
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const SingleWorld = () => {
  const { id } = useParams(),
        world = useSelector(state => state.root.discoveredWorlds.find(world=> world.id === +id)),
        [isLoading, setIsLoading] = useState(false),
        [error, setError] = useState(false),
        [wrongPath, setWrongPath] = useState(false),
        [currentTab, setCurrentTab] = useState('History');


  if (isLoading) {
    return <LoadingIcon />;
  } else if (error) {
    return <Error />;
  } else if (wrongPath) {
    return <PageNotFound />
  };

  const declareUnknown = (subject) => {
    return (
      <p>This world's {subject} is unknown.</p>
    );
  };

  const handleTabClick = (tabName) => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    });
    setCurrentTab(tabName)
  }

  const listDetails = (list) => {
    let sentenceFragment = '';
    if(!Array.isArray(list)){
      return null;
    } else if (list.length > 1) {
      let lastItem = list[list.length - 1];
      sentenceFragment = list.slice(0, -1).join(', ') + ' and ' + lastItem;
    } else if (list.length === 1) {
      sentenceFragment = list[0];
    }

    return sentenceFragment.charAt(0).toUpperCase() + sentenceFragment.slice(1).toLowerCase();
  }

  const makeDetailsCards = (category) => {
    let additionalDetails;

    return category.map(item => {
      console.log(item)
      switch (category) {
        case world.species:
          additionalDetails = [
            `Alignment: ${item.alignment}`,
            `Politics: ${item.politics}`
          ];
          break;
        case world.locations:
          additionalDetails = [
            `Climate: ${item.climate}` 
          ];
          break;
        case world.characters:
          additionalDetails = [
            `Species: ${item.species}`,
            `Alignment: ${item.alignment}`,
            `Age: ${item.age}`,
            `Location: ${item.location}`
          ];
          break;
        case world.events:
          additionalDetails = [
            `${item.time} in the age of ${item.age}`
          ];
          break;
      };
      
      return (
        <Detail
          item={item}
          additionalDetails={additionalDetails}
        />
      );
    });
  };

  const inhabitants = world.species ? makeDetailsCards(world.species)
                      : declareUnknown('inhabitants');

  const locations = world.locations ? makeDetailsCards(world.locations)
                      : declareUnknown('locations');

  const characters = world.characters ? makeDetailsCards(world.characters)
                      : declareUnknown('characters');

  const events = world.characters ? makeDetailsCards(world.events)
                      : declareUnknown('events');

  const history =
      <div className="single-det-wrapper hist-det-text-wrapper">
        { world.lore ? world.lore.map((par, index) => <p key={index}>{par}</p>) : declareUnknown('history') }
      </div>;

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
        <div className="single-top-wrapper">
          <h2>{world.name}</h2>
          <div className="single-geo">
            <p><span className="attr-name">Shape </span>  {world.geoDynamics.shape}</p>
            <p><span className="attr-name">Size </span> {world.geoDynamics.size}</p>
            <p><span className="attr-name">Climate </span> {world.geoDynamics.climate}</p>
          </div>
          <div className="single-mag-tech">
            <p className="lvl-name">Magic<span className="level">Level {world.magicTechnology.magicLvl}</span></p>
            <p className="lvl-detail">{listDetails(world.magicTechnology.magic)}</p>
          </div>
          <div className="single-mag-tech">
            <p className="lvl-name">Techonology<span className="level">Level {world.magicTechnology.techLvl}</span></p>
            <p className="lvl-detail">{listDetails(world.magicTechnology.technology)}</p>
          </div>
          <p>{world.description}</p>
        </div>
      </div>

      <div className="tabs">
        {Object.keys(tabContent).map((tabName) => (
          <button
            key={tabName}
            onClick={() => handleTabClick(tabName)}
            aria-label={`Open ${tabName} tab`}
            tabIndex={0}
            className={currentTab === tabName ? 'tab-active' : 'tab'}
          >
            {tabName}
          </button>
        ))}
      </div>
      <div className="tab-content single-det-wrapper">
                {currentTab === 'History' ? tabContent[currentTab] : <DetailCarousel content={tabContent[currentTab]} />}
          </div>
    </section>
  );
};