//css
import "../assets/css/Home.css";
//icons
import Typewriter from "./Typewriter";
import iconsFacebook from "../assets/icons/icons8-facebook-50.png";
import iconsX from "../assets/icons/icons8-x-50.png";
import iconsInsta from "../assets/icons/icons8-insta-50.png";
const Home = () => {
   return (
      <main className="home">
         <div className="containerRedes">
            <div className="redes">
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={iconsFacebook} alt="Facebook" width={"25px"} /></a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={iconsInsta} alt="Instagram" width={"25px"} /></a>
               <a href="https://x.com" target="_blank" rel="noopener noreferrer"><img src={iconsX} alt="X" width={"25px"} /></a>
            </div>
         </div>
         <section className="containerTitle">
            <span className="lineaHome">We are</span>
            <h1 className="titleHome">ScaleLink</h1>
            <Typewriter />
          
         </section>
         <div className="containerLinks">
            <p>
               Projects
               <span></span>
            </p>
         </div>
      </main>
   );
};

export default Home;
