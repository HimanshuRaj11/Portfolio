import "./About.css";
import {NavLink, useNavigate} from "react-router-dom"
import { ImHeadphones } from "react-icons/im";
import {HiMiniDocumentArrowDown} from "react-icons/hi2"
import {AiFillProject} from "react-icons/ai"
import {MdDesignServices} from "react-icons/md"

const About = ({ lightBg }) => {

 
  const projects = 6;
  return (
    <div className="About  center column" id="About">
      <div className="headline center column">
        <h1>ABOUT ME</h1>
        <h4 className={`${lightBg ? "d-sub-text" : "l-sub-text"}`}>
          My Introduction
        </h4>
      </div>

      <div className="Details d-flex center row">
        <div className="img-part d-flex center" >
          <div className="img" data-aos="fade-right"  data-aos-duration="2000">
          <img
            src="https://i.postimg.cc/0QDP0gmP/Snapchat-589910122-01.jpg"
            alt=""
          />
          </div>
        </div>
        <div className="D-part">
          <div className="info d-flex a-center row">
            <div data-aos="fade-up" data-aos-duration="2000" className={`info-card d-flex center column ${
                lightBg ? "light-comp" : "dark-comp"
              }`}
            >
              <MdDesignServices />
              <h3>Experience</h3>
              <h6>2+ Years</h6>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className={`info-card d-flex center column ${
                lightBg ? "light-comp" : "dark-comp"
              }`}
            >
              <AiFillProject />
              <h3>Projects</h3>
              <h6>{projects}</h6>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className={`info-card d-flex center column ${
                lightBg ? "light-comp" : "dark-comp"
              }`}
            >
              <ImHeadphones />
              <h3>Support</h3>
              <h6>Online 24*7</h6>
            </div>
          </div>
          <div className="about-text" data-aos="fade-left" data-aos-duration="2000">
            <p>
              FullStack Developer, I develope website with Stunning Designs,
              Seamless User Experience As a seasoned MERN technology enthusiast,
              I have mastered the art of weaving captivating designs with the
              power of MongoDB, Express.js, React, and Node.js. <br/>{" I'm"} Always looking
              to expand my skill set,{" I'm"} currently learning React Native, C++
              and Data Structures & Algorithms, as well as
              Python/Machine Learning.
            </p>
          </div>
          <NavLink to={"https://himanshu-raj.vercel.app/public/resume.pdf"} target="_blank" className={`btn btn-c ${lightBg?"d-text":"l-text"}`} >
            View cv <HiMiniDocumentArrowDown style={{fontSize:"25px"}} /> </NavLink>
        </div>
      </div>
      
    </div>
  );
};

export default About;
