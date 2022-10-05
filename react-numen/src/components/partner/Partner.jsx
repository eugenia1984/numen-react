import React from 'react';
import "./Partner.css";
import Office from "../../assets/images/office.jpg";

const Partner = () => {
  const text ="WorkAndMates es nuestro partner";

  return (
    <div className="partner">
      <img 
        src={Office}
        alt="muebles de oficina"
        className="partner-image"
      />
      <h2 className="partner-text">{text}</h2>
    </div>
  );
};

export {Partner};