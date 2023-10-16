import { NavLink } from "react-router-dom";
import "./Portfolio.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Portfolio = ({ lightBg }) => {
  return (
    <div className="Portfolio center column" id="Portfolio">
      <div className="top center column" style={{ height: "15vh" }}>
        <h1>Portfolio</h1>
        <h4 className={`${lightBg ? "d-sub-text" : "l-sub-text"}`}>
          My recent work
        </h4>
      </div>

      <div className="work">
        <div className="projects  center wrap">
          <NavLink data-aos="fade-up" to={'https://tfc-beryl.vercel.app/'}>
            <div className={`project ${lightBg ? "light-comp" : "dark-comp"}`}>
              <div className="img">
                <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/restaurant-wordpress-themes1.jpg" alt="" />
              </div>
              <div className="P-D j-center column">
                <h2 className="title">TFC</h2>
                <span className="view">
                  View <AiOutlineArrowRight />{" "}
                </span>
              </div>
            </div>
          </NavLink>
        

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
