import './WorldBrowser.css'
import React from  'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import WorldCard from '../WorldCard/WorldCard';

export const WorldBrowser = () => {
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds)
 
  if (useLocation().pathname !== '/worlds') {
    return <PageNotFound />
  }

  return (
    <div className='world-browser-container'>
      {displayedWorlds.map((world) => (
        <WorldCard world ={world}/>
      ))}
    </div>
  );
}