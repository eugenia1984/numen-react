import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import  Products from "./pages/Products";
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import { Warning } from "./components/warning/Warning";

function App() {
  return (
    <>
    <Warning/>
      <Header />
      <ShoppingCart/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}
// prueba
export default App;
