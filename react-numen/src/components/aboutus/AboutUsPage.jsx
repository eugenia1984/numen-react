import React, { useState, useEffect } from "react";
import axios from "axios";
import CardUser from "./Cards";
import "./AboutUsPage.css";

const AboutUsPage = () => {
const [usuario, setusuario] = useState([])

useEffect(() => {
   axios("http://localhost:3001/usuarios")
    .then(res => setusuario(res.data))
}, [] )
   
  return (
    <div className="divAU"  >
      {usuario && usuario.map((item)=>
        <CardUser 
          img={item.imagen} 
          name={item.nombre} 
          ocupacion={item.ocupacion}
          />
      )}
    </div>
  );
};

export { AboutUsPage };