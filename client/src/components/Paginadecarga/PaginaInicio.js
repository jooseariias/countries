import React from "react";
import { Link } from "react-router-dom";
import "../../estilos/Paginainicio.css";
import video from "../../img/video.mp4";
export default function PaginaInicio() {
  return (
    <div className="C-buttom">
      <video src={video} autoPlay loop muted />
      <div className="cont">
        <h3 className="titulo-i">Countris App</h3>
        <Link to={"/home"}>
          <button className="B-inicio">inicio</button>
        </Link>
        <h3 className="titulo-i">Henry PI</h3>
      </div>
    </div>
  );
}
