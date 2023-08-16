import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import './PageNotFound.css';

export const PageNotFound = () => {
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
        <h2>Lost your way?</h2>
        <p>Sorry, we can't find this page. You'll find worlds to discover and explore back home.</p>
        <button className="not-found-home" onClick={() => handleClick()}>Home</button>
      </div>
    </div>
  );
};