import './App.css';
import React, { useEffect } from 'react';
import { getAllWorldsData } from './apiCalls'; 
import { useDispatch } from 'react-redux';
import { getDiscoveredWorlds } from './Components/rootSlice';
import { Route, Switch } from 'react-router-dom';
import { SingleWorld } from './Components/SingleWorld/SingleWorld';
import { WelcomePage } from './Components/WelcomePage/WelcomePage'
import { Header } from './Components/Header/Header.js'
import { WorldBrowser } from './Components/WorldBrowser/WorldBrowser';
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
      <Header />
      <Switch>
        <Route path="/world/:id" render={() => ( <SingleWorld /> )}/>
        <Route path="/worlds" render={() => ( <WorldBrowser /> )} />
        <Route path="/" render={()=> ( <WelcomePage/> )}/>
      </Switch>
    </div>
  );
}

export default App;