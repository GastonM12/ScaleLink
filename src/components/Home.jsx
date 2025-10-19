//css
import "../assets/css/Home.css";
//icons
import Typewriter from "./Typewriter";
import iconsFacebook from "../assets/icons/icons8-facebook-50.png";
import iconsX from "../assets/icons/icons8-x-50.png";
import iconsInsta from "../assets/icons/icons8-insta-50.png";
const Home = () => {
   return (
      <div className="home">
         <div className="containerRedes">
            <div className="redes">
               <img src={iconsFacebook} alt="" width={"25px"} />
               <img src={iconsInsta} alt="" width={"25px"} />
               <img src={iconsX} alt="" width={"25px"} />
            </div>
         </div>
         <div className="containerTitle">
            <span className="lineaHome">We are</span>
            <h1 className="titleHome">ScaleLink</h1>
            <Typewriter />
          
         </div>
         <div className="containerLinks">
            <p>
               Projects
               <span></span>
            </p>
         </div>
      </div>
   );
};

export default Home;
