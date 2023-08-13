import './WorldBrowser.css'
import React from  'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { LoadingIcon } from '../LoadingIcon/LoadingIcon';
import { Error } from '../Error/Error';
import { MainCarousel } from '../PreviewComponents/MainPreview/MainCarousel';
import { GridPreview } from '../PreviewComponents/GridPreview/GridPreview';
import { Carousel } from '../PreviewComponents/CarouselPreview/Carousel';
import { useHistory } from 'react-router-dom';

export const WorldBrowser = () => {
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds);
  const loading = useSelector((state) => state.root.isLoading);
  const error = useSelector((state) => state.root.error);
  const history = useHistory()

  const chooseRandomWorlds = (worlds) => {
    const selectedWorlds = [];

    while (selectedWorlds.length < 15) {
      const randomIndex = Math.floor(Math.random() * worlds.length);
      
      if (!selectedWorlds.includes(randomIndex)) {
        selectedWorlds.push(worlds[randomIndex]);
      }
    }

    return selectedWorlds;
  }

  const routeToWorld = (id) => {
    const worldView = `world/${id}`
    history.push(worldView)
  }

  console.log(displayedWorlds[121])

  console.log(displayedWorlds.reduce((acc, currentValue) => {
    currentValue.genres.forEach(genre => {
      if (!acc[genre]) {
        acc[genre] = [currentValue.id]
      } else {
        acc[genre].push(currentValue.id)
      }
    })

    return acc
  }, []))

  const gridPreviews = displayedWorlds.slice(0, 12).map(world => <GridPreview world={world}/>)

  // ok first you need to create the component
  // then make sure its taking in the props and adding the info 
  // the right way
  // then stylize
  //then repeat
  // building the carousel components pause and research for a little

  //index of cool worlds 114, 56, 61, 49, 26, 21
  const mainPreviewWorlds = [displayedWorlds[59],
                            displayedWorlds[114],
                            displayedWorlds[56],
                            displayedWorlds[61],
                            displayedWorlds[49],
                            displayedWorlds[26],
                            displayedWorlds[59]]

  if (useLocation().pathname !== '/worlds') {
    return <PageNotFound />;
  } else if (loading) {
    return <LoadingIcon />;
  } else if (error) {
    return <Error />;
  } else if (displayedWorlds.length > 0) {
    return (
      <div className='world-browser-container'>
        <section className='preview-section red'>
          <MainCarousel worlds={mainPreviewWorlds} routeToWorld={routeToWorld}/>
        </section>
        <section className='preview-section blue'>
          <Carousel worlds={chooseRandomWorlds(displayedWorlds)} routeToWorld={routeToWorld}/>
          <Carousel worlds={chooseRandomWorlds(displayedWorlds)} routeToWorld={routeToWorld}/>
          <Carousel worlds={chooseRandomWorlds(displayedWorlds)} routeToWorld={routeToWorld}/>
          <Carousel worlds={chooseRandomWorlds(displayedWorlds)} routeToWorld={routeToWorld}/>
          <Carousel worlds={chooseRandomWorlds(displayedWorlds)} routeToWorld={routeToWorld}/>
        </section>
        <section className='preview-section'>
          <div className='grid-preview-wrapper'>
            {gridPreviews}
          </div>
        </section>
      </div>
    );
  }
};