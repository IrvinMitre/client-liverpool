import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404 - Not Found</h1>
      <p className="error-message">
        Oops! la página que buscaste no existe.
      </p>
      <Link to="/" className="home-link">
        Regresar al Home
      </Link>
    </div>
  );
};

export default Error404;

