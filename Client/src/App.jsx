import { useEffect, useState } from "react";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { useSearchParams } from "react-router-dom";
import MNavbar from "./Components/Navbar/M_Navbar";

import { IoApps } from "react-icons/io5";

const App = () => {
  let [lightBg, setLightBg] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`App ${lightBg ? "light-bg" : "dark-bg"}`}>
      <Navbar lightBg={lightBg} setLightBg={setLightBg} />
      <div className={`Container`}>
        {/* <Routes>
          <Route excat path="/" element={<Home lightBg={lightBg} />} />
        </Routes> */}

        <Home lightBg={lightBg} />
        <About lightBg={lightBg} />
        <Skill lightBg={lightBg} />
        <Services lightBg={lightBg} />
        <Portfolio lightBg={lightBg} />
        <Contact lightBg={lightBg} />
      </div>
      {
        mobileMenu &&(
          <MNavbar lightBg={lightBg} setMobileMenu={setMobileMenu} />
        )
      }
      <IoApps className="icon app-icon" onClick={()=>{
        setMobileMenu(true)
      }} />
      <Footer lightBg={lightBg} />
    </div>
  );
};

export default App;
