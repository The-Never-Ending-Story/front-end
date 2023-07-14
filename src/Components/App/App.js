import './App.css';
import React, { useEffect, useState } from 'react';
import { getAllWorldsData } from '../../apiCalls.js'
import { useDispatch } from 'react-redux';
import { getDiscoveredWorlds } from '../rootSlice';
import { Route, Switch } from 'react-router-dom';
import { SingleWorld } from '../SingleWorld/SingleWorld';
import { WelcomePage } from '../WelcomePage/WelcomePage'
import { Header } from '../Header/Header.js'
import { WorldBrowser } from '../WorldBrowser/WorldBrowser';
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
      setIsLoading(false);
    }).catch(err => {
      setError(true)
        setIsLoading(false);
    })
  }, [dispatch] )

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/world/:id" render={() => ( <SingleWorld /> )}/>
        <Route path="/worlds" render={() => ( <WorldBrowser /> )} />
        <Route path="/" render={()=> ( <WelcomePage/> )}/>
      </Switch>
    </div>
  );
}

export default App;