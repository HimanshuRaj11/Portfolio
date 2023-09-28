import { NavLink } from "react-router-dom";
import "./Home.css";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const img = "https://i.postimg.cc/HnK0VWDN/img1.png";

const Home = ({ lightBg }) => {
  return (
    <div className={`Home row center`} id="Home">
      <div className="w d-flex row a-center">
        <div className="s-part d-flex j-center column">
          <NavLink>
            <AiFillInstagram className="s-icon" />
          </NavLink>
          <NavLink>
            <AiFillGithub className="s-icon" />
          </NavLink>
          <NavLink>
            <AiFillTwitterCircle className="s-icon" />
          </NavLink>
          <NavLink>
            <AiFillLinkedin className="s-icon" />
          </NavLink>
        </div>

        <div className="home-cont center">
          <div className="m-part center column">
            <span>
              <h2>Hello {"I'm"}</h2>
              <h1>Himanshu raj</h1>
              <h3>Designer & Developer</h3>
              <h5>{"I'm"} a creative Designer & Developer and</h5>
              <h5>{"I'm"} Very Passionate & Dedicated to my work.</h5>
              <button className={`btn btn-c ${lightBg ? "d-text" : "l-text"}`}>
                Contact Me
              </button>
            </span>
          </div>
          <div className="p-part center">
            <div className="wrapper">
              <div className="frame f-1" style={{ border: `5px solid ${lightBg ? "#1c2833" : "#f7f9f9"}`}}></div>
              <div className="frame f-2" style={{ border: `5px solid ${lightBg ? "#1c2833" : "#f7f9f9"}`}}></div>
              <div className="img  d-flex center">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
