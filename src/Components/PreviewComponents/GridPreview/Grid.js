import React, {useState, useEffect} from 'react'
import { GridPreview } from './GridPreview';
import './GridPreview.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Grid = ({routeToWorld}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth),
        [numberToDisplay, setDisplay] = useState(0),
        [worlds, setWorlds] = useState(useSelector(state => state.root.discoveredWorlds));

    // console.log(displayedWorlds)
  // const chooseRandomWorlds = (worlds, numberToDisplay) => {
  //   const selectedWorlds = [];

  //   while (selectedWorlds.length < numberToDisplay) {
  //     const randomIndex = Math.floor(Math.random() * worlds.length);
      
  //     if (!selectedWorlds.includes(randomIndex)) {
  //       selectedWorlds.push(worlds[randomIndex]);
  //     };
  //   };

  //   return selectedWorlds;
  // };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (windowWidth < 500) {
      setDisplay(6);
    } else if (windowWidth < 761) {
      setDisplay(8)
    }
      else if (windowWidth < 1000) {
      setDisplay(9)
    } else {
      setDisplay(12);
    };

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const gridPreviews = worlds
                        .slice(0, numberToDisplay)
                        .map((world, index)=>
                          <GridPreview 
                            world={world}
                            routeToWorld={routeToWorld}
                            key={index}
                          />
                        );

  return (
    <div className='grid-preview-wrapper'>
      {gridPreviews}
    </div>
  );
};
