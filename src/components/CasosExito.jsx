import React from "react";
import "../assets/css/CasosExito.css";

const CasosExito = () => {
   const servicesAsTiers = [
      {
         title: "Posicionamiento en Google Maps",
         features: [
            "Aparece primero en búsquedas locales",
            "Atrae más clientes a tu tienda física",
            "Optimización completa de tu perfil",
            "Genera más llamadas y visitas",
         ],
         buttonText: "Descubrir Más",
         featured: false,
      },
      {
         title: "Automatizaciones Inteligentes",
         features: [
            "Ahorra tiempo y reduce costos",
            "Optimiza tus procesos de negocio",
            "Integración con tus herramientas actuales",
            "Flujos de trabajo 100% personalizados",
         ],
         buttonText: "Descubrir Más",
         featured: true,
      },
      {
         title: "Marketing y Desarrollo Web",
         features: [
            "Diseño web moderno y de alto impacto",
            "Estrategias de contenido que convierten",
            "Campañas de publicidad efectivas",
            "Consolida tu presencia online",
         ],
         buttonText: "Descubrir Más",
         featured: false,
      },
   ];

   return (
      <section className="pricing-section">
         <h2 className="pricing-title">Nuestros Servicios</h2>
         <div className="pricing-container">
            {servicesAsTiers.map((tier, index) => (
               <div
                  key={index}
                  className={`pricing-card ${tier.featured ? "featured" : ""}`}
               >
                  <h3 className="tier-title">{tier.title}</h3>
                  <ul className="tier-features">
                     {tier.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                     ))}
                  </ul>
                  <button className="btn-consultar">{tier.buttonText}</button>
               </div>
            ))}
         </div>
      </section>
   );
};

export default CasosExito;
