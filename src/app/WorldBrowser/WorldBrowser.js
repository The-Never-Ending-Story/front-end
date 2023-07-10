import './WorldBrowser.css'
import React from  'react';
import { useSelector } from 'react-redux';
import WorldCard from '../WorldCard/WorldCard';

function WorldBrowser() {

  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds)

  return (
    <div className='world-browser-container'>
      {displayedWorlds.map((world) => (
        <WorldCard world ={world}/>
      ))}
    </div>
  );
}

export default WorldBrowser;
