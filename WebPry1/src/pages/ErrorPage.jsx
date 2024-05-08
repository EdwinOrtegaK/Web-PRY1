import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/admin");
  };

  return (
    <div className="blog-empty-state">
      <h2>No se puede acceder a esta pagina</h2>
      <p>Regresa para logearte</p>
      <button id="submit" type="button" className="btn btn-primary" onClick={handleLoginRedirect}>
        Logearse
      </button>
    </div>
  );
};

export default Error;
