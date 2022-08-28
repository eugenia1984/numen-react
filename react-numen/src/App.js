import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Products } from "./pages/Products";
import { Warning } from "./components/warning/Warning";
import { Contacto } from "./pages/Contacto";


function App() {
  return (
    <>
    <Warning/>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/contacto" element={<Contacto />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
