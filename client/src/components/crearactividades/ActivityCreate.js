/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */

import React, { useEffect } from "react";
import { getAllCountries } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../estilos/activityCreate.css";

export default function ActivityCreate() {
  const AllCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);
  console.log(AllCountries);

  return (
    <div>
      <div className="Contenedor-home">
        <section className="C-dos">
          <Link to={"/home"}>
            <button className="B-Inicio">Menu</button>
          </Link>
          <div>
            <Link to="/activity">
              <button className="B-Inicio B-Inicio-1 ">
                Crear Actividades
              </button>
            </Link>
            <Link to="/ActivityCreate">
              <button className="B-Inicio">Actividades Creadeas</button>
            </Link>
          </div>
        </section>
      </div>
      <div className="Cont-create">
        {AllCountries.map((e) => {
          if (e.activities.length > 0) {
            return (
              <div className="cont-create-une">
                <h1>{e.name}</h1>
                <img src={e.image} />
                {e.activities.map((e) => {
                  return (
                    <div>
                      <h2>{e.name}</h2>
                      <h3>{e.duration}</h3>
                      <h4>{e.dificulty}</h4>
                      <h5>{e.season}</h5>
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
