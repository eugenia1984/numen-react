import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Features } from "./components/Features"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Features />
      <Footer />
    </>
  );
}

export default App;