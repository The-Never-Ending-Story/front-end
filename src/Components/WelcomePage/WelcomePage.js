import React from "react";
import { useHistory } from 'react-router-dom';
import { getRandomWorldData } from "../../apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError } from '../rootSlice';
import { Error } from '../Error/Error';
import './WelcomePage.css';
import { About } from "../About/About";
import { HeroImageSlider } from '../HeroImageSlider/HeroImageSlider';
import { Footer } from '../Footer/Footer';
import { HeroText } from "../HeroText/HeroText";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";

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
    });
  };

  if (error) {
    return <Error />;
  } else if(displayedWorlds.length === 0) {
    return <LoadingIcon />
 } else {
  return (
    <main className="welcome-page" >
      <HeroImageSlider />
      <div className="main-welcome-content">
        <HeroText />
        <About discoverNewWorld={discoverNewWorld}/>
        <Footer />
      </div>
    </main>
  );
 }
};