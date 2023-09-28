import "./Navbar.css";
import {NavLink, useSearchParams} from "react-router-dom"
import {BsFillMoonFill,BsSunFill} from "react-icons/bs"
import { useEffect, useState } from "react";

const Navbar = ({lightBg,setLightBg}) => {


  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 100);
   });
 }, []);
  return (
    <div className={`Navbar d-flex a-center row ${scroll?"nav-shadow": ""}`}>

      <div className="logo font3">Himanshu</div>

      <div className={`menus font2`}>
        <NavLink className={`link`} onClick={(e)=>{
          e.preventDefault()
           window.scrollTo({
                top: document.querySelector("#Home").offsetTop,
                behavior: "smooth",
              });
        }}>Home</NavLink>
        <NavLink className={`link`} onClick={(e)=>{
          e.preventDefault()
           window.scrollTo({
                top: document.querySelector("#About").offsetTop,
                behavior: "smooth",
              });
        }}>About</NavLink>
        <NavLink className={`link`} onClick={(e)=>{
          e.preventDefault()
           window.scrollTo({
                top: document.querySelector("#Skills").offsetTop,
                behavior: "smooth",
              });
        }}>Skills</NavLink>
        <NavLink className={`link`} onClick={(e)=>{
          e.preventDefault()
           window.scrollTo({
                top: document.querySelector("#Services").offsetTop,
                behavior: "smooth",
              });
        }}>Services</NavLink>
        <NavLink className={`link`} onClick={(e)=>{
          e.preventDefault()
           window.scrollTo({
                top: document.querySelector("#Portfolio").offsetTop,
                behavior: "smooth",
              });
        }}>Portfolio</NavLink>
        <NavLink className={`link`} onClick={(e)=>{
          e.preventDefault()
           window.scrollTo({
                top: document.querySelector("#Contact").offsetTop,
                behavior: "smooth",
              });
        }}>Contact</NavLink>
      </div>

      <div className="theamChanger">
        {
            lightBg?<BsFillMoonFill className="Theam-icon" onClick={()=>{
                setLightBg(false)
                window.localStorage.setItem('lightBg',false)
              }}/>
              :<BsSunFill className="Theam-icon"onClick={()=>{
                window.localStorage.setItem('lightBg',true)
                setLightBg(true)
            }}/>
        }
      </div>
    </div>
  );
};

export default Navbar;
