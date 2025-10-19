import logo from "../assets/5-06.png";
//css
import "../assets/css/Nav.css";
const Nav = () => {
   return (
      <div className="containerNav">
         <div>
            <img className="logoNav" src={logo} alt="" />
         </div>
         <div>
            <a href="">Home</a>
            <a href="">Projects</a>
         </div>
      </div>
   );
};

export default Nav;
