import './WorldBrowser.css';
import React from  'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { LoadingIcon } from '../LoadingIcon/LoadingIcon';
import { Error } from '../Error/Error';
import { MainCarousel } from '../PreviewComponents/MainPreview/MainCarousel';
import { Carousel } from '../PreviewComponents/CarouselPreview/Carousel';
import { useHistory } from 'react-router-dom';
import { Grid } from '../PreviewComponents/GridPreview/Grid';

export const WorldBrowser = () => {
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds);
  const loading = useSelector((state) => state.root.isLoading);
  const error = useSelector((state) => state.root.error);
  const history = useHistory();

  const chooseRandomWorlds = (worlds, numberToDisplay) => {
    const selectedWorlds = [];

    while (selectedWorlds.length < numberToDisplay) {
      const randomIndex = Math.floor(Math.random() * worlds.length);
      
      if (!selectedWorlds.includes(randomIndex)) {
        selectedWorlds.push(worlds[randomIndex]);
      };
    };

    return selectedWorlds;
  };

  const routeToWorld = (id) => {
    const worldView = `world/${id}`;
    history.push(worldView);
  };

  // console.log(displayedWorlds[121])
  // console.log(displayedWorlds.reduce((acc, currentValue) => {
  //   currentValue.genres.forEach(genre => {
  //     if (!acc[genre]) {
  //       acc[genre] = [currentValue.id]
  //     } else {
  //       acc[genre].push(currentValue.id)
  //     }
  //   })

  //   return acc
  // }, []))

  const mainPreviewWorlds = [40, 103, 60, 56, 25, 30].map(id => {
    return displayedWorlds.find(world => world.id === id);
  });

  if (useLocation().pathname !== '/worlds') {
    return <PageNotFound />;
  } else if (loading) {
    return <LoadingIcon />;
  } else if (error) {
    return <Error />;
  } else if (displayedWorlds.length > 0) {
    return (
      <div className='world-browser-container'>
        <section className='preview-section main-preview-display'>
          <MainCarousel worlds={mainPreviewWorlds} routeToWorld={routeToWorld}/>
        </section>
        <section className='preview-section carousel-preview-display'>
          <Carousel worlds={chooseRandomWorlds(displayedWorlds, 15)} routeToWorld={routeToWorld}/>
          <Carousel worlds={chooseRandomWorlds(displayedWorlds, 15)} routeToWorld={routeToWorld}/>
          <Carousel worlds={chooseRandomWorlds(displayedWorlds, 15)} routeToWorld={routeToWorld}/>
          <Carousel worlds={chooseRandomWorlds(displayedWorlds, 15)} routeToWorld={routeToWorld}/>
          <Carousel worlds={chooseRandomWorlds(displayedWorlds, 15)} routeToWorld={routeToWorld}/>
        </section>
        <section className='preview-section grid-preview-display'>
          <Grid routeToWorld={routeToWorld}/>
        </section>
      </div>
    );
  }
};