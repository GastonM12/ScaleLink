import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import image from "../assets/image/serviceUno.png";
import imageDos from "../assets/image/serviceDos.png";
import imageTres from "../assets/image/serviceTres.png";

import "../assets/css/Servicios.css";

const Servicios = ({ scrollPosition }) => {
   const [activeIndex, setActiveIndex] = useState(1); // Card del medio activa

   const services = [
      {
         id: 1,
         image: image,
         title: "Google Maps",
         description:
            "Potenciá la visibilidad de tu negocio en tu zona. Te ayudamos a aparecer en Google Maps con una ficha optimizada que mejora tu posicionamiento local y atrae nuevos clientes todos los días.",
      },
      {
         id: 2,
         image: imageTres,

         title: "Automatizaciones inteligentes",
         description:
            "Sitios web modernos y responsive que convierten visitantes en clientes. Diseño profesional adaptado a tu marca.",
      },
      {
         id: 3,
         image: imageDos,
         title: "Diseño de paginas web",
         description:
            "Sitios web modernos y responsive que convierten visitantes en clientes. Diseño profesional adaptado a tu marca.",
      },
   ];

   const handlePrev = () => {
      setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
   };

   const handleNext = () => {
      setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
   };

   const handleCardClick = (index) => {
      setActiveIndex(index);
   };

   return (
      <section className="service">
         <div className="content-servicio">
            <h2
               className={
                  scrollPosition.y >= 200
                     ? "service-title"
                     : "service-title-none"
               }
            >
               Servicios
            </h2>
         </div>

         <div className="carousel-controls">
            <button className="carousel-btn" onClick={handlePrev}>
               <ChevronLeft size={30} />
            </button>

            <div
               className={
                  scrollPosition.y >= 250
                     ? "content-service-cards"
                     : "content-service-cards-none"
               }
            >
               {services.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                     <div
                        key={service.id}
                        className={`card-service ${
                           isActive ? "active" : "inactive"
                        }`}
                        onClick={() => handleCardClick(index)}
                     >
                        <div className="service-content-img">
                           <img
                              className="sercive-img"
                              src={service.image}
                              alt={service.title}
                           />
                        </div>
                        {isActive && (
                           <>
                              <h3>{service.title}</h3>
                              <p>{service.description}</p>
                              <button className="btn-service">
                                 View Service
                              </button>
                           </>
                        )}
                     </div>
                  );
               })}
            </div>

            <button className="carousel-btn" onClick={handleNext}>
               <ChevronRight size={30} />
            </button>
         </div>

         {/* Indicadores */}
         <div className="carousel-indicators">
            {services.map((_, index) => (
               <button
                  key={index}
                  className={`indicator ${
                     index === activeIndex ? "active-indicator" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
               />
            ))}
         </div>
      </section>
   );
};

export default Servicios;
