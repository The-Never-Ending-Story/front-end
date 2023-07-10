import './App.css';
import React, { useEffect } from 'react';
import { getAllWorldsData } from './apiCalls'; 
import { useDispatch } from 'react-redux';
import { getDiscoveredWorlds } from './app/rootSlice';

import WorldBrowser from './app/WorldBrowser/WorldBrowser';

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
      <WorldBrowser />
    </div>
  );
}

export default App;
