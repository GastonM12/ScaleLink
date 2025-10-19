import Logo from "./assets/ScaleLink.png";
import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import CasosExito from "./components/CasosExito";

function App() {
   const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const handleScroll = () => {
         const newScrollPosition = {
            x: window.scrollX,
            y: window.scrollY,
         };
         setScrollPosition(newScrollPosition);
         console.log("Posición de scroll:", newScrollPosition);
      };
      // Añadir el event listener al montar el componente
      window.addEventListener("scroll", handleScroll);
      // Limpiar el event listener al desmontar el componente
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar y desmontar

   return (
      <div className="containerHome">
         <Nav />
         <Home />
         <Servicios scrollPosition={scrollPosition} />
         <Contacto />
         <CasosExito />
         <Footer />
      </div>
   );
}

export default App;
