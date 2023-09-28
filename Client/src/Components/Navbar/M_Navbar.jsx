import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiFillHome, AiFillProfile } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdHomeRepairService, MdContactPage } from "react-icons/md";
import { RiLayoutLeft2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const MNavbar = ({ lightBg, setMobileMenu }) => {
  return (
    <div className={`mobile-menue center`}>
        
      <div className="links center wrap">
        <NavLink
          className={`link ${lightBg ? "light-comp" : "dark-comp"}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector("#Home").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          <AiFillHome className="icon" />
          Home
        </NavLink>

        <NavLink
          className={`link ${lightBg ? "light-comp" : "dark-comp"}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector("#About").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          <BsFillPersonFill className="icon icon" />
          About
        </NavLink>

        <NavLink
          className={`link ${lightBg ? "light-comp" : "dark-comp"}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector("#Skills").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          <AiFillProfile className="icon" />
          Skills
        </NavLink>

        <NavLink
          className={`link ${lightBg ? "light-comp" : "dark-comp"}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector("#Services").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          <MdHomeRepairService className="icon" />
          Services
        </NavLink>

        <NavLink
          className={`link ${lightBg ? "light-comp" : "dark-comp"}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector("#Portfolio").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          <RiLayoutLeft2Fill className="icon" />
          Portfolio
        </NavLink>

        <NavLink
          className={`link ${lightBg ? "light-comp" : "dark-comp"}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector("#Contact").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          <MdContactPage className="icon" />
          Contact
        </NavLink>
      </div>

      <ImCross
        className="close icon"
        onClick={() => {
          setMobileMenu(false);
        }}
      />
    </div>
  );
};

export default MNavbar;
