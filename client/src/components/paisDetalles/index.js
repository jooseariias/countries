import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getCountriesDetails, Clean } from "../../redux/actions";
import "../../estilos/details.css"
const CountryDetail = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.details);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountriesDetails(id));
    return dispatch(Clean());
  }, [dispatch, id]);

  return data && data.id ? (
    <div>
      <div>
        <div className="buttom-details">
          <Link to={"/home"}>
            <button className="B-detais">Menu</button>
          </Link>
        </div>
        </div>
        <div className="Cont-info">
      <div className="C-info">
        <img className="img-info" src={data.image} alt={data.image} />
        <div className="I-cont">
          <h1>{data.name}</h1>
          <h2>Capital: {data.capital}</h2>
          <h2>Continents: {data.continent}</h2>
          <h2>Subregion: {data.subregion}</h2>
          <h2>
            Area: {data.area?.toLocaleString("es-AR") || ""} km<sup>2</sup>
          </h2>
          <h2>Poblation: {data.population?.toLocaleString("es-AR") || ""}</h2>
        </div>
        </div>
       
      </div>
      <div className="Cont-activity">
      <div className="C-activity">
        {data.activities &&
          data.activities.map((e) => {
            return (
              <div className="Targeta-uno" key={e.id}>
                <h2>Nombre de actividad </h2>
                <h3>{e.name}</h3>
                <h2>Dificultad</h2>
                <h3>{e.duration}</h3>
                <h2>Duracion</h2>
                <h3>{e.duration}</h3>
                <h2>Temporada de actividad</h2>
                <h3>{e.season}</h3>
              </div>
            );
          })}
      </div>
    </div>
    </div>
  ) : (
    <div>
      <p>Loading...</p>
      
    </div>
    
  );
};

export default CountryDetail;
