
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Detail = ({ item, additionalDetails }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { img, imgAlt, name, lore, id } = item;

  // Ref for the modal container
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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = (e) => {
    // Check if the mouse is leaving the modal container
    if (!modalContainerRef.current.contains(e.relatedTarget)) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="single-det-wrapper" key={id}>
      {windowWidth > 1200 && (
        <div className="single-det-container">
          {/* ... */}
        </div>
      )}

      {windowWidth < 1200 && (
        <div className="modal-det-container">
          <img
            className="single-det-img"
            src={img}
            alt={imgAlt}
            onClick={handleOpenModal}
            onMouseEnter={handleMouseEnter}
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
