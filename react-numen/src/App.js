
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import  Home  from "./pages/Home";
import  Header  from "./components/header/Header";
import  Footer  from "./components/footer/Footer";
import  Warning  from "./components/warning/Warning";
import  {ThemeProvider}  from "@mui/material";
import  {themeCustom}  from "./components/styles/themeCustom";
import  {Route, Routes}  from "react-router-dom";
import Productos from "./pages/Productos";

function App() {

  return (
    <ThemeProvider theme={themeCustom}>
      <Warning />
      <Header />
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/Productos" element={<Productos />} />

      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
// prueba
export default App;
