import React from 'react'
import { MainPreview } from './MainPreview'

export const MainCarousel = ({worlds, routeToWorld}) => {
  const MainPreviews = worlds.map(world =>
                        <MainPreview 
                          routeToWorld={routeToWorld}
                          world={world}
                      />)
  return (
    <div className='main-carousel'>
      { MainPreviews }
    </div>
  )
}
