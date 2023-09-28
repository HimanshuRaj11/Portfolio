import { NavLink } from "react-router-dom";
import "./Footer.css"



const Footer = ({lightBg}) => {
    return (
        <div className={`Footer center column ${lightBg? "l-footer": "d-footer"}`}>
            <div className="f-upper center column">
                
            </div>
            <div className="f-lower center">
                &copy; Copyright reserved 2023 by <NavLink style={{margin:"0 8px"}} onClick={(e)=>{
                    e.preventDefault()
                    window.scrollTo({
                        top:document.querySelector("#Home").offsetTop,
                        behavior:"smooth",
                    })
                }}> Himanshu</NavLink>
            </div>
        </div>
    );
}

export default Footer;
