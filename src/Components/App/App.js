import './App.css';
import React, { useEffect } from 'react';
import { getAllWorldsData } from '../../apiCalls.js'
import { useDispatch } from 'react-redux';
import { getDiscoveredWorlds } from '../rootSlice';
import { Route, Switch } from 'react-router-dom';
import { SingleWorld } from '../SingleWorld/SingleWorld';
import { WelcomePage } from '../WelcomePage/WelcomePage'
import { Header } from '../Header/Header.js'
import { WorldBrowser } from '../WorldBrowser/WorldBrowser';
function App() {
  const dispatch = useDispatch()

  useEffect( () => {
    getAllWorldsData()
    .then(data => {
      console.log(data)
      dispatch(getDiscoveredWorlds(data))
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