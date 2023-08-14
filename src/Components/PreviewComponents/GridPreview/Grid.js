import React, {useState, useEffect} from 'react'
import { GridPreview } from './GridPreview';
import './GridPreview.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Grid = ({routeToWorld}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const worlds = useSelector((state) => state.root.discoveredWorlds);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let numberOfPreviews;

  if ( windowWidth < 1000) {
    numberOfPreviews = 9;
  } else {
    numberOfPreviews = 12;
  }

  const chooseRandomWorlds = (worlds, numberToDisplay) => {
    const selectedWorlds = [];

    while (selectedWorlds.length < numberToDisplay) {
      const randomIndex = Math.floor(Math.random() * worlds.length);
      
      if (!selectedWorlds.includes(randomIndex)) {
        selectedWorlds.push(worlds[randomIndex]);
      }
    }

    return selectedWorlds;
  }

  const gridPreviews = worlds.slice(0, numberOfPreviews)
                        .map(world =>
                          <GridPreview 
                            world={world}
                            routeToWorld={routeToWorld}
                          />
                        )

  return (
    <div className='grid-preview-wrapper'>
      {gridPreviews}
    </div>
  )
}
