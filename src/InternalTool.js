import React, { useState} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const InternalTool = () => {
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds),
        [picture, setPicture] = useState(''),
        [id, setId] = useState(0);
 
  const getRandomPicture = (type) => {
    const randomNumber =  Math.floor(Math.random() * displayedWorlds.length);

    setId(displayedWorlds[randomNumber].id)
    setPicture(displayedWorlds[randomNumber].img.hero)
  }


  return (


    <div className='world-button'>
      <img src={picture}/>

      <button onClick={getRandomPicture}/>
    </div>
  )
}

