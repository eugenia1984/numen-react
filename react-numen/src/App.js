import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Products } from "./pages/Products";
import { Warning } from "./components/warning/Warning";
/*import imagenEuge from "./components/aboutus/imgs/euge.jpg";
import imagenEkel from "./components/aboutus/imgs/ekel.jpg";
import imagenTincho from "./components/aboutus/imgs/tincho.jpg";
import imagenJuli from "./components/aboutus/imgs/juli.jpg";*/
import { AboutUs } from "./components/aboutus/AboutUs";


function App() {

const aboutUsEuge = {
  id:1,
  nombre: `Maria Eugenia`,
  Ocupacion: `Team Leader`,
  /*imagen: imagenEuge,*/
}
  

const aboutUsEkel = {
  id:2,
  nombre: `Ekel Leal`,
  Ocupacion: `FrontEnd Developer`,
  /*imagen: imagenEkel,*/

}

const aboutUsTincho = {
  id:3,
  nombre: `Martín La Rosa`,
  Ocupacion: `BackEnd Developer`,
  /*imagen: imagenTincho,*/

}

const aboutUsJuli = {
  id:4,
  nombre: `Julieta Marcer`,
  Ocupacion: `UX/UI Designer`,
  /*imagen: imagenJuli,*/

}

  return (
    <>
    <Warning/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <div style={{display:`grid` , width: `900px`, justifyContent: `space-between`, gap :10, flexDirection: `row`, gridTemplateColumns: `repeat (4, 1fr`}}>
      <AboutUs aboutUs={aboutUsEuge}/>
      <AboutUs aboutUs={aboutUsEkel}/>     
      <AboutUs aboutUs={aboutUsTincho}/>
      <AboutUs aboutUs={aboutUsJuli}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
