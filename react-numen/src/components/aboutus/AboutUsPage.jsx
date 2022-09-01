import React from "react";
import imagenEuge from "./imgs/euge.jpeg";
import imagenEkel from "./imgs/ekel.jpeg";
import imagenTincho from "./imgs/tincho.jpeg";
import imagenJuli from "./imgs/juli.jpeg";
import CardUser from "./Cards";

const usuarios= [
  {
    id: 1,
    nombre: `Maria Eugenia Costa`,
    Ocupacion: `Team Leader`,
    imagen: imagenEuge,
  },

  {
    id: 2,
    nombre: `Ekel Leal`,
    Ocupacion: `FrontEnd Developer`,
    imagen: imagenEkel,
  },
  {
    id: 3,
    nombre: `Martín Larrosa`,
    Ocupacion: `BackEnd Developer`,
    imagen: imagenTincho,
  },

  {
    id: 4,
    nombre: `Julieta Marcer`,
    Ocupacion: `UX/UI Designer`,
    imagen: imagenJuli,
  },


]
const AboutUsPage = () => {
   
  return (
    <div style={{display: "flex" , gap: 10, flexWrap: "wrap", width:"100vw"}} >
      {usuarios.map((item)=>
      <CardUser img={item.imagen} name={item.nombre}/>
      )}
   
     { /*<AboutUs aboutUs={aboutUsEuge} />
      <AboutUs aboutUs={aboutUsEkel} />
      <AboutUs aboutUs={aboutUsTincho} />
    <AboutUs aboutUs={aboutUsJuli} /> */}
    </div>
  );
};

export { AboutUsPage };
