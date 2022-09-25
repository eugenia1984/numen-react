import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import { Warning } from "./components/warning/Warning";

function App() {
  return (
    <>
    <Warning/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
// prueba
export default App;
