import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import './Error.css';

export const Error = () => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  };

  return (
    <div className="not-found-wrapper">
      <div className="not-found">
        <h2>Something Went Wrong</h2>
        <p>HyperLoom is currently experiencing issues.</p>
        <p>Please try again later.</p>
        <button className="not-found-home" onClick={() => handleClick()}>Home</button>
      </div>
    </div>
  );
};