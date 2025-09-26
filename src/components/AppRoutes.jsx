import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import Contacto from "../pages/Contacto.jsx";
import Carta from "../pages/Carta.jsx";
import Nosotros from "../pages/Nosotros.jsx";
import Carrito from "../pages/Carrito.jsx";

function AppRoutes (){
  
    return(
      <>
    <Routes>
      <Route path="/Inicio" element={<Inicio/>} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/carta" element={<Carta />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/carrito" element={<Carrito />} />
    </Routes>
    </>
    );
}
export default AppRoutes;