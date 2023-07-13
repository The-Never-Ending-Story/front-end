import './App.css';
import React, { useEffect } from 'react';
import { getAllWorldsData } from './apiCalls'; 
import { useDispatch } from 'react-redux';
import { getDiscoveredWorlds } from './app/rootSlice';
import { Route, Switch } from 'react-router-dom';
import { SingleWorld } from './app/SingleWorld/SingleWorld';
import { WelcomePage } from './app/WelcomePage/WelcomePage'
import { Header } from './app/Header/Header.js'
import { WorldBrowser } from './app/WorldBrowser/WorldBrowser';

function App() {
  const dispatch = useDispatch()

  useEffect( () => {
    getAllWorldsData()
    .then(data => {
      dispatch(getDiscoveredWorlds(data.worlds))
    }).catch(err => console.log(err))
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