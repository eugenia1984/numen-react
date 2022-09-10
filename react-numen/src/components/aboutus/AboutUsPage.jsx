import React, { useState, useEffect } from "react";
import axios from "axios";
import imagenEuge from "./imgs/euge.jpeg";
import imagenEkel from "./imgs/ekel.jpeg";
import imagenTincho from "./imgs/tincho.jpeg";
import imagenJuli from "./imgs/juli.jpeg";
import CardUser from "./Cards";
import "./AboutUsPage.css";

const usuarios= [
  {
    id: 1,
    nombre: `Maria Eugenia Costa`,
    ocupacion: `Team Leader`,
    imagen: imagenEuge,
  },

  {
    id: 2,
    nombre: `Ekel Leal`,
    ocupacion: `FrontEnd Developer`,
    imagen: imagenEkel,
  },
  {
    id: 3,
    nombre: `Martín Larrosa`,
    ocupacion: `BackEnd Developer`,
    imagen: imagenTincho,
  },

  {
    id: 4,
    nombre: `Julieta Marcer`,
    ocupacion: `UX/UI Designer`,
    imagen: imagenJuli,
  },


]
const AboutUsPage = () => {
const [usuario, setusuario] = useState([])

useEffect(() => {
   axios("http://localhost:3001/usuarios").then(res =>
   setusuario(res.data))
  

}, [] )

   
  return (
    <div className="divAU"  >
      {usuario && usuario.map((item)=>
      <CardUser img={item.imagen} name={item.nombre} ocupacion={item.ocupacion}/>
      )}

    </div>
  );
};

export { AboutUsPage };
