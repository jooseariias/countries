/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  addActivities, getAllCountries} from "../../redux/actions";
import "../../estilos/Form.css"



function Validate(input) {
  let errors = {};
  if (!input.name.length) {
    errors.name = "Ingresa Un Nombre De Actividad";
  }
 
  if (!input.dificulty) {
    errors.dificulty = "Elige Un Nivel De Dificultad";
  } else if (parseInt(input.dificulty) < 1 || parseInt(input.dificulty) > 5) {
    errors.dificulty = "La dificulty deber estar entre 1 y 5";
  }

  if (!input.duration) {
    errors.duration = "Elije el tiempo de duracion";
  } else if (parseInt(input.duration) < 1 || parseInt(input.duration) > 24) {
    errors.duration = "El tiempo de duración debe de estar entre 1 y 24";
  }

  if (!input.season) {
    errors.season = "Te falta seleccionar una temporada";
  } else if (
    !["Verano", "Invierno", "Otoño", "Primavera"].includes(input.season)
  ) {
    errors.season = "Te falta seleccionar una temporada";
  }
  return errors;
}

const CreateActivity = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countries);
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  const [errors, setErrors] = useState({});

  function handleChange(el) {
    el.preventDefault();
    setInput({
      ...input,
      [el.target.name]: el.target.value,
    });
    setErrors(
      Validate({
        ...input,
        [el.target.name]: el.target.value,
      }),
    );
  }

  function handleSelect(el) {
    el.preventDefault();
    if (input.countries.includes(el.target.value)) {
      return alert("este país ya esta cargado");
    } else {
      setInput({
        ...input,
        countries: [...input.countries, el.target.value],
      });
    }
  }

  function handleSubmit(el) {
    el.preventDefault();
    if(!input.name || !input.season ){
      alert("Te Faltan Datos Por Completar")
    }else{
      setErrors(
        Validate({
          ...input,
          [el.target.name]: el.target.value,
        }),
      );
      
      dispatch(addActivities(input));
      setInput({
        name: "",
        dificulty: [],
        duration: "",
        season: [],
      });
      alert("Actividad Creada");
      history.push("/home");
    }
    
  }
  
  function handleDelete(el) {
    setInput({
      ...input, // se trae el estado anterior
      countries: input.countries.filter((occ) => occ !== el),
    });
  }
  useEffect(() => {
    setErrors(Validate(input));
    dispatch(getAllCountries())
  }, [input]);

  return (
    <div className="Cont-Formulario">
      
      <div className="C-form">
      <h4 className="Titulo-form">Agregar Actividad</h4>
      <form onSubmit={(el) => handleSubmit(el)}>
          <div className="Separado">
            <label className="f-text" htmlFor="">Nombre:</label>
            <input  
              type="text"
              value={input.name}
              name="name"
              onChange={(el) => handleChange(el)}
            />
            <br/>
            <p>{errors.name}</p>
          </div>
          <div className="Separado"s>
            <label className="f-text" htmlFor=""> Dificultad:</label>
            <input
              type="number"
              value={input.dificulty}
              name="dificulty"
              min="1"
              max="5"
              onChange={(el) => handleChange(el)}
              
            />
             <br/>
            <p>{errors.dificulty}</p>
          </div>
          <div className="Separado">
            <label className="f-text" htmlFor="">Duración:</label>
            <input
              type="number"
              value={input.duration}
              name="duration"
              min="1"
              max="24"
              onChange={(el) => handleChange(el)}
            />
          <br/>
            <p>{errors.duration}</p>
          </div>
          <div className="Separado">
            <label className="f-text" htmlFor="">Temporada:</label>
            <label>
              <input
                type="checkbox"
                value="Invierno"
                name="season"
                onChange={(el) => handleChange(el)}
              />
              Invierno
            </label>
            <label>
              <input
                type="checkbox"
                value="Verano"
                name="season"
                onChange={(el) => handleChange(el)}
              />
              Verano
            </label>
            <label>
              <input
                type="checkbox"
                value="Primavera"
                name="season"
                onChange={(el) => handleChange(el)}
              />
              Primavera
            </label>
            <label>
              <input
                type="checkbox"
                value="Otoño"
                name="season"
                onChange={(el) => handleChange(el)}
              />
              Otoño
            </label>
            <br/>
           <p>{errors.season}</p>
           <br/>
          </div>

          <select onChange={(el) => handleSelect(el)}>
            {country?.map((co) => (
              <option value={co.id}  key={co.id} >
                {co.name}
              </option>
            ))}
          </select>
          <button type="submit">Crear Actividad</button>

          <div className="uno">
            {input.countries.map((el) => (
              <div className="div-baderas" key={el}>
                <h6>{el}</h6>

            {country.map((e)=>{
              if(el === e.id){
                return(
                  <div>
                 <img src={e.image} width="40" height="30" />
                  </div>
                )}
            })}
                <button className="x" onClick={() => handleDelete(el)}>X</button>
              </div>
            ))}
          </div>
      </form>
      </div>
        <div>
      <Link to="/home">
        <button>Regresar</button>
      </Link>
      </div>     
      </div>
  );
};

export default CreateActivity;
