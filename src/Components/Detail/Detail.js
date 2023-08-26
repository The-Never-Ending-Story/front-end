import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Detail = ({ item, additionalDetails }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth),
        [isModalOpen, setIsModalOpen] = useState(false),
        {img, imgAlt, name, lore, id } = item;

  const modalContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = (e) => {
    if (!modalContainerRef.current.contains(e.relatedTarget)) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="single-det-wrapper" key={id}>
      {windowWidth > 1200 && (
        <div className="single-det-container">
          <img className="single-det-img" src={img} alt={name || 'world detail'} />
          <div className="single-det-text-wrapper">
            <h3>{name}</h3>
            {additionalDetails && additionalDetails.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
            <p>{lore}</p>
          </div>
        </div>
      )}

      {windowWidth < 1200 && (
        <div
          className="single-det-container"
          onClick={handleOpenModal}
          onMouseEnter={handleMouseEnter}
        >
          <img
            className="single-det-img"
            src={img}
            alt={imgAlt}
          />

          {isModalOpen && (
            <motion.div
              ref={modalContainerRef}
              transition={{ delay: 0.1, type: 'just' }}
              className="single-det-modal"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              onMouseLeave={handleMouseLeave}
            >
              <h3>{name}</h3>
                {additionalDetails && additionalDetails.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              <p>{lore}</p>
           </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
