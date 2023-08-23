import './App.css';
import React, { Fragment, useEffect } from 'react';
import { getAllWorldsData } from '../../apiCalls.js';
import { useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError, changeIsLoading } from '../rootSlice';
import { Route, Switch } from 'react-router-dom';
import { SingleWorld } from '../SingleWorld/SingleWorld';
import { WelcomePage } from '../WelcomePage/WelcomePage'
import { Header } from '../Header/Header.js'
import { WorldBrowser } from '../WorldBrowser/WorldBrowser';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { HeroImageSlider } from '../HeroImageSlider/HeroImageSlider';
import { Footer } from '../Footer/Footer';

function App() {
  const dispatch = useDispatch()

  useEffect( () => {
    getAllWorldsData()
    .then(data => {
      dispatch(getDiscoveredWorlds(data))
      dispatch(changeIsLoading(false))
    }).catch(err => {
      console.log('errorfound')
      dispatch(changeIsLoading(false))
      dispatch(changeError(err.message))
    })
  }, [dispatch] )

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" render={()=> 
          <Fragment>
            <HeroImageSlider />
            <WelcomePage />
            <Footer />
          </Fragment>
        } />
       
        <Route path="/worlds" render={() => ( <WorldBrowser /> )} />
        <Route path="/world/:id" render={() => ( <SingleWorld /> )}/>
        <Route exact path='*' render={() => <PageNotFound />} />
      </Switch>
    </div>
  );
}

export default App;
