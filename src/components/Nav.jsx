import { useEffect, useRef } from "react";
import logo from "../assets/5-06.png";
//css
import "../assets/css/Nav.css";
const Nav = ({ scrollPosition }) => {
   const navbarRef = useRef(null);

   useEffect(() => {
      const navbar = navbarRef.current;

      if (scrollPosition.y >= 200) {
         navbar.classList.add("shrink");
      } else {
         navbar.classList.remove("shrink");
      }
   }, [scrollPosition]);
   return (
      <nav ref={navbarRef} className="containerNav">
         <div>
            <a href="/">
               <img className="logoNav" src={logo} alt="ScaleLink Logo" />
            </a>
         </div>
         <div>
            <a href="">Home</a>
            <a href="">Projects</a>
         </div>
      </nav>
   );
};

export default Nav;
