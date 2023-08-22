import React from "react";
import { Link, useHistory } from 'react-router-dom'
import { getRandomWorldData } from "../../apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError } from '../rootSlice';
import {Error} from '../Error/Error'
import './WelcomePage.css'
import { About } from "../About/About";

export const WelcomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds);
  const error = useSelector((state) => state.root.error);

  const discoverNewWorld = ()=> {
    getRandomWorldData()
    .then(data=> {
      const addOne = [...displayedWorlds, data];
      dispatch(getDiscoveredWorlds(addOne));
      history.push(`/world/${data.id}`);
    }).catch((error)=>{
      dispatch(changeError(error));
    })
  };

  if (error) {
    return <Error />;
  };

  return (
    <main className="welcome-page">
      <About discoverNewWorld={discoverNewWorld}/>
    </main>
  )
};