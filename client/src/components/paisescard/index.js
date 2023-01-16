import React from "react";
import { Link } from "react-router-dom";
import "../../estilos/Countrycard.css";

function CountryCard({ image, name, continents, id }) {



  return (
    <div>
      <div className="Contenedor-card">
        <Link className="Links" to={`/country/${id}`}>
          <div className="contenedor-cards">
            <h3>{name}</h3>
            <img className="Imagen-home" src={image} alt={image} />
            <h4>{continents}</h4>
            
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CountryCard;
