import React, {useState, useEffect} from "react";

export const Detail = ({ item, additionalDetails }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { img, imgAlt, name, lore, id } = item;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (




    
    <div className="single-det-wrapper" key={id}>
      
      { windowWidth > 1200 && 
        <div className="single-det-container">
          <img className="single-det-img" src={img} alt={imgAlt} />
          <div className="single-det-text-wrapper">
            <h3>{name}</h3>
            {additionalDetails && additionalDetails.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
            <p>{lore}</p>
          </div>
        </div>
      }

      { windowWidth < 1200 && 
        <div className="single-det-container">
          <img className="single-det-img" src={img} alt={imgAlt} />
          <div className="single-det-text-wrapper">
            <h3>{name}</h3>
            {additionalDetails && additionalDetails.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
            <p>{lore}</p>
          </div>
        </div>
      }





    </div>
  );
};