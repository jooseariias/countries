/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllCountries,
  orderByName,
  orderByPopulation,
  filterByRegion,
} from "../../redux/actions";
import Pagination from "../paginado";
import React from "react";
import CountryCard from "../paisescard";
import SearchBar from "../barradebusqueda";
import "../../estilos/home.css";

function Home() {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);

  const [currentPage, setCurrentPage] = useState(1);

  const [countriesPerPage] = useState(10);

  const indexOfLastCountry = currentPage * countriesPerPage;

  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const [orden, setOrden] = useState("");

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(getAllCountries());

  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllCountries());
  }

  function handleSortName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrden(`orden ${e.target.value}`);
  }

  function handleSortPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setOrden(`orden${e.target.value}`);
  }
  function handleFilterByContinents(e) {
    e.preventDefault();
    dispatch(filterByRegion(e.target.value));
    setOrden(`orden${e.target.value}`);
  }

  return (
    <div >
      <div className="Contenedor-home">
        <section className="C-dos">
          <Link to={"/"}>
            <button className="B-Inicio">Inicio</button>
          </Link>
          <SearchBar />
          <div>
            <Link to="/activity"><button className="B-Inicio B-Inicio-1 " >Crear Actividades</button></Link>
            <Link to="/ActivityCreate"><button className="B-Inicio">Actividades Creadeas</button></Link>
          </div>
        </section>
        <div>
          <div className="C-tres">
            <div>
              <label  htmlFor="">Orden Alfabético: </label>
              <select className="B-home-selector" onChange={(e) => handleSortName(e)}>
                <option value={"All"}>All</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
              </select>
            </div>
            <div>
              <label  htmlFor="">Ordenar por Poblacion: </label>
              <select className="B-home-selector" onClick={(el) => handleSortPopulation(el)}>
                <option value="All">All</option>
                <option value="mayor">Mayor</option>
                <option value="menor">Menor</option>
              </select>
            </div>
            <div>
              <label   htmlFor="">Buscar por Continentes: </label>
              <select className="B-home-selector" onChange={(e) => handleFilterByContinents(e)}>
                <option  value={"All"}>All </option>
                <option value={"South America"}>Sudamérica</option>
                <option value={"North America"}>Norteamérica</option>
                <option value={"Africa"}>África</option>
                <option value={"Asia"}>Asia</option>
                <option value={"Europe"}>Europa</option>
                <option value={"Oceania"}>Oceanía</option>
                <option value={"Antarctica"}>Antárctica</option>
              </select>
            </div>
            <div>
              <button className="B-Inicio" onClick={(el)=>handleClick(el)}>Recargar Paises</button>
            </div>
          </div>
        </div>

      </div>
      <section className="C-Paginado">
          <Pagination
            className="Nav-Paginado"
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginate={paginate}
          />
        </section>
      <div className="Home-contenido">
          {currentCountries?.map((e) => {
           
            return (
              <div key={e.id}>
                <CountryCard 
                  id={e.id}
                  name={e.name}
                  image={e.image}
                  continents={e.continent}
                 
                />
              </div>
            );
          })}
        </div>
        <section className="C-Paginado C-Paginado-dos">
          <Pagination
            className="Nav-Paginado"
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginate={paginate}
          />
        </section>
    </div>
  );
}

export default Home;
