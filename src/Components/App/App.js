import './App.css';
import React, { useEffect, useState } from 'react';
import { getAllWorldsData } from '../../apiCalls.js'
import { useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError, changeIsLoading } from '../rootSlice';
import { Route, Switch } from 'react-router-dom';
import { SingleWorld } from '../SingleWorld/SingleWorld';
import { WelcomePage } from '../WelcomePage/WelcomePage'
import { Header } from '../Header/Header.js'
import { WorldBrowser } from '../WorldBrowser/WorldBrowser';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { LoadingIcon } from '../LoadingIcon/LoadingIcon';
import { Error } from '../Error/Error';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  useEffect( () => {
    getAllWorldsData()
    .then(data => {
      dispatch(getDiscoveredWorlds(data))
      dispatch(changeIsLoading(false))
      // setIsLoading(false);
    }).catch(err => {
      setError(true)
        setIsLoading(false);
    })
  }, [dispatch] )

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" render={()=> ( <WelcomePage /> )}/>
        <Route path="/worlds" render={() => ( <WorldBrowser /> )} />
        <Route path="/world/:id" render={() => ( <SingleWorld /> )}/>
        <Route exact path='*' render={() => <PageNotFound />} />
      </Switch>
    </div>
  );
}

export default App;
