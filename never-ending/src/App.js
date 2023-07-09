import './App.css';
import React, { useEffect } from 'react';
import { getAllWorldsData } from './apiCalls'; 
import { useDispatch } from 'react-redux';
import { getDiscoveredWorlds } from './app/rootSlice';
import { Route, Switch } from 'react-router-dom';
import { SingleWorld } from './app/SingleWorld/SingleWorld';

function App() {
  const dispatch = useDispatch()

  useEffect( () => {
    getAllWorldsData()
    .then(data => {
      dispatch(getDiscoveredWorlds(data.worlds))
    })
  }, [] )

  return (
    <div className="App">
      <Switch>
        <Route path="/world/:id" render={() => ( <SingleWorld /> )}/>
      </Switch>
    </div>
  );
}

export default App;
