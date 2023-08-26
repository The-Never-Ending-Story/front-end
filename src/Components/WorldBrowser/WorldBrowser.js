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
  const displayedWorlds = useSelector(state => state.root.discoveredWorlds),
        loading = useSelector(state => state.root.isLoading),
        error = useSelector(state => state.root.error),
        history = useHistory();

  const routeToWorld = id => {
    const worldView = `world/${id}`;
    history.push(worldView);
    window.scrollTo(0, 0);
  };

  const makeFilteredArray = category => {
    return displayedWorlds.filter(world => world.category === category);
  };

  const carouselPreviews = ['Fantasy & Mystical',
                            'Futuristic & Tech',
                            'Nature & Environment',
                            'Urban & Modern',
                            'Miscellaneous & Niche'
                          ].map((category, index) => 
                            <Carousel
                              category={category}
                              filteredWorlds={makeFilteredArray(category)}
                              routeToWorld={routeToWorld}
                              key={index}
                              />
                            );

  const mainPreviewWorlds = [1, 96, 107, 100, 93].map(id => {
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
          {carouselPreviews}
        </section>
        <section className='preview-section grid-preview-display'>
          <Grid routeToWorld={routeToWorld}/>
        </section>
      </div>
    );
  }
};