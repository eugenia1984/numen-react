import React from "react";
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
   
  return (
    <div className="divAU"  >
      {usuarios.map((item)=>
      <CardUser img={item.imagen} name={item.nombre} ocupacion={item.ocupacion}/>
      )}

    </div>
  );
};

export { AboutUsPage };
