import React from "react";
import imagenEuge from "./imgs/euge.jpeg";
import imagenEkel from "./imgs/ekel.jpeg";
import imagenTincho from "./imgs/tincho.jpeg";
import imagenJuli from "./imgs/juli.jpeg";
import { AboutUs } from "./AboutUs";

const AboutUsPage = () => {
  const aboutUsEuge = {
    id: 1,
    nombre: `Maria Eugenia`,
    Ocupacion: `Team Leader`,
    imagen: imagenEuge,
  };

  const aboutUsEkel = {
    id: 2,
    nombre: `Ekel Leal`,
    Ocupacion: `FrontEnd Developer`,
    imagen: imagenEkel,
  };

  const aboutUsTincho = {
    id: 3,
    nombre: `Martín La Rosa`,
    Ocupacion: `BackEnd Developer`,
    imagen: imagenTincho,
  };

  const aboutUsJuli = {
    id: 4,
    nombre: `Julieta Marcer`,
    Ocupacion: `UX/UI Designer`,
    imagen: imagenJuli,
  };

  return (
    <div
      style={{
        display: `grid`,
        width: `900px`,
        justifyContent: `space-between`,
        gap: 10,
        flexDirection: `row`,
        gridTemplateColumns: `repeat (4, 1fr)`,
      }}
    >
      <AboutUs aboutUs={aboutUsEuge} />
      <AboutUs aboutUs={aboutUsEkel} />
      <AboutUs aboutUs={aboutUsTincho} />
      <AboutUs aboutUs={aboutUsJuli} />
    </div>
  );
};

export { AboutUsPage };
