import React, { useEffect } from 'react'
import './HeroCarousel.css'

const HeroCarousel = ({worldPreviews}) => {
  useEffect(()=> {
    if (!worldPreviews.length > 0) {
      console.log('worldPreviews empty')
    }
  }, [worldPreviews])

  return (
    <section className='my-hero'>
      <div className='test-words'>
        Aetheria
      <div className="keyframe-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
    </section>
  )
}

export default HeroCarousel;