import "../assets/css/Carrusel.css";
import Logo1 from "../assets/image/pngwing.com.png";
import Logo2 from "../assets/image/pngwing.com2.png";
import Logo3 from "../assets/image/pngwing.com3.png";
import Logo4 from "../assets/image/pngwing.com4.png";
import Logo5 from "../assets/image/pngwing.com5.png";
import Logo6 from "../assets/image/pngwing.com6.png";

const Carousel = () => {
   // Array de empresas de ejemplo - reemplaza con tus logos reales
   const companies = [
      {
         name: "Microsoft",
         logo: Logo1,
      },
      {
         name: "Google",
         logo: Logo2,
      },
      {
         name: "Apple",
         logo: Logo3,
      },
      {
         name: "Netflix",
         logo: Logo4,
      },
      {
         name: "Spotify",
         logo: Logo5,
      },
      {
         name: "Adobe",
         logo: Logo6,
      },
   ];

   return (
      <>
         <div className="carousel">
            <div className="group">
               {companies.map((img, index) => {
                  return (
                     <img
                        className="card"
                        key={index}
                        src={img.logo}
                        alt={img.name}
                     />
                  );
               })}
            </div>
            <div className="group">
               {companies.map((img, index) => {
                  return (
                     <img
                        className="card"
                        key={index}
                        src={img.logo}
                        alt={img.name}
                     />
                  );
               })}
            </div>
         </div>
      </>
   );
};

export default Carousel;
