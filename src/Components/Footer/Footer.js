import './Footer.css';
import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const Footer = () => {
  const [rect, setRect] = useState(0),
        teamContainerRef = useRef(null)
  const error = useSelector((state) => state.root.error);

  useEffect(() => {
    const handleScroll = () => {
      if(teamContainerRef.current) {
        const newRect = teamContainerRef.current.getBoundingClientRect()
        setRect(newRect)
      };
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='footer-container'>
      <div 
      className='team-container' 
      ref={teamContainerRef}
      style={{
        // opacity: rect.top >= 575 ? .10 : 1 
      }}
      >
        <h1>The Team</h1>
        <div className='team-section'>
          <div className='front-end-container'>
            <h2>Frontend:</h2>
            <div className='dev-container'>
              <p>Adam Meza</p>
              <a href='https://www.linkedin.com/in/adam-meza/'>
                <p>LinkedIn</p>
              </a>
              <a href='https://github.com/Adam-Meza'>
                <p>GitHub</p>
              </a>
            </div>
            <div className='dev-container'>
              <p>Shane Misra</p>
              <a href='https://www.linkedin.com/in/shanemisra/'>
                <p>LinkedIn</p>
              </a>
              <a href='https://github.com/sdmisra'>
                <p>GitHub</p>
              </a>
            </div>
            <div className='dev-container'>
              <p>Priscilla Paxton</p>
              <a href='https://www.linkedin.com/in/priscilla-paxton/'>
                <p>LinkedIn</p>
              </a>
              <a href='https://github.com/priscillaapaxton'>
                <p>GitHub</p>
              </a>
            </div>
            <div className='dev-container'>
              <p>Sharie Trachsel</p>
              <a href='https://www.linkedin.com/in/sharie-trachsel/'>
                <p>LinkedIn</p>
              </a>
              <a href='https://github.com/sdtrachsel'>
                <p>GitHub</p>
              </a>
            </div>
          </div>
          <div className='front-end-container'>
            <h2>Backend:</h2>
            <div className='dev-container'>
              <p>Andrew Bowman</p>
              <a href='https://www.linkedin.com/in/andrew-b0wman/'>
                <p>LinkedIn</p>
              </a>
              <a href='https://github.com/abwmn'>
                <p>GitHub</p>
              </a>
            </div>
            <div className='dev-container'>
              <p>Sean Cowans</p>
              <a href='https://www.linkedin.com/in/sean-cowans/'>
                <p>LinkedIn</p>
              </a>
              <a href='https://github.com/sjcowans'>
                <p>GitHub</p>
              </a>
            </div>
            <div className='dev-container'>
              <p>Branden Ge</p>
              <a href='https://www.linkedin.com/in/brandenge/'>
                <p>LinkedIn</p>
              </a>
              <a href='https://github.com/brandenge'>
                <p>GitHub</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
