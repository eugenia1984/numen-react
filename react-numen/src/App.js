import  Home  from "./pages/Home";
import  Header  from "./components/header/Header";
import  Footer  from "./components/footer/Footer";
import  Warning  from "./components/warning/Warning";
import  Contacto  from "./pages/Contacto";
import  {ThemeProvider}  from "@mui/material";
import  {themeCustom}  from "./components/styles/themeCustom";
import  {Route, Routes}  from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Productos from "./pages/Productos";




function App() {


  return (
    <ThemeProvider theme={themeCustom}>
      <Warning />
      <Header />
      <Routes>
       
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/Aboutus" element={<AboutUs />} />
        <Route exact path="/Productos" element={<Productos />} />
        <Route exact path="/Contacto" element={<Contacto />} />
      </Routes>

      
      <Footer />
    </ThemeProvider>
  );
}

export default App;
