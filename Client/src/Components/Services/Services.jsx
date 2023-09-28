import "./Services.css"
import {AiFillLayout,AiFillCode,AiOutlineArrowRight,AiFillCheckCircle} from "react-icons/ai"
import {MdEditSquare} from "react-icons/md"
import {ImCross} from "react-icons/im"
import { useState } from "react"

const Services = ({lightBg}) => {

    const [service1, setService1] = useState(false)
    const [service2, setService2] = useState(false)
    const [service3, setService3] = useState(false)

    return (
        <div className='Services d-flex center column' id="Services">
            <div className="head center column" style={{height:"15vh", margin:"10px 0"}}>
                <h1>SERVICES</h1>
                <h5 className={`${lightBg ? "d-sub-text" : "l-sub-text"}`}>What I offer</h5>
            </div>
            <div className="services-container center wrap">


                <div data-aos="zoom-in" data-aos-duration="5000" className={`service-card j-center column ${lightBg?"light-comp":"dark-comp"}`} onClick={()=>{
                    setService1(true)
                }}>
                    <AiFillLayout className="icon"/>
                    <span>
                    <h1>Web</h1>
                    <h1>Developer</h1>
                    </span>
                    <h6>view More <AiOutlineArrowRight/> </h6>
                </div>
                <div data-aos="zoom-in" data-aos-duration="5000"  className={`service-card j-center column ${lightBg?"light-comp":"dark-comp"}`} onClick={()=>{
                    setService2(true)
                }}>
                    <AiFillCode className="icon"/>
                    <span>
                    <h1>UI&UX</h1>
                    <h1>Desiner</h1>
                    </span>
                    <h6>view More <AiOutlineArrowRight/> </h6>
                </div>
                <div data-aos="zoom-in" data-aos-duration="5000"  className={`service-card j-center column ${lightBg?"light-comp":"dark-comp"}`} onClick={()=>{
                    setService3(true)
                }}>
                    <MdEditSquare className="icon"/>
                    <span>
                    <h1>Branding</h1>
                    <h1>Desiner</h1>
                    </span>
                    <h6>view More <AiOutlineArrowRight/> </h6>
                </div>


            </div>

        {/* =========== Service PopUp Cards =============== */}

            {
                service1&&(
                    <div className="service-details center ">
                    <div className={`card ${lightBg?"light-comp": "dark-comp"}`}>
                    <span className="close" onClick={()=>{
                        setService1(false)
                        setService2(false)
                        setService3(false)
                    }}>
                        <ImCross/>
                    </span>
                    
                    <div className="top center column">
                        <AiFillLayout className="icon"/>
                        <h1 style={{margin:"10px 0", letterSpacing:"1px"}}>Web Development</h1>
                        <h4 className={`${lightBg ? "d-sub-text" : "l-sub-text"}`} style={{margin:"10px 0", padding:"10px",textAlign:"center", letterSpacing:"1.2px"}}>
                            Services with more than 2 years of experience. Providing quality work to my Clients.
                        </h4>
                    </div>
                    <div className="s-list d-flex column">
                        <span className="list"><AiFillCheckCircle className="tick"/> I have Programming Proficiency </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Cross-Browser Compatibility </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Security Awareness </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Fast web responding </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Version Control/Git </span>
                    </div>
                    </div>
                </div>
                )
            }
            {
                service2&&(
                    <div className="service-details center ">
                    <div className={`card ${lightBg?"light-comp": "dark-comp"}`}>
                    <span className="close" onClick={()=>{
                        setService1(false)
                        setService2(false)
                        setService3(false)
                    }}>
                        <ImCross/>
                    </span>
                    
                    <div className="top center column">
                        <AiFillCode className="icon"/>
                        <h1 style={{margin:"10px 0", letterSpacing:"1px"}}>UI&UX Desiner</h1>
                        <h4 className={`${lightBg ? "d-sub-text" : "l-sub-text"}`} style={{margin:"10px 0", padding:"10px",textAlign:"center", letterSpacing:"1.2px"}}>
                            Services with more than 2 years of experience. Providing quality work to my Clients.
                        </h4>
                    </div>
                    <div className="s-list d-flex column">
                        <span className="list"><AiFillCheckCircle className="tick"/> User-Centered Design </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Wireframing and Prototyping </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Responsive Designs </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Visual Design Skills </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Usability Testing and Iteration </span>
                    </div>
                    </div>
                </div>
                )
            }
            {
                service3&&(
                    <div className="service-details center ">
                    <div className={`card ${lightBg?"light-comp": "dark-comp"}`}>
                    <span className="close" onClick={()=>{
                        setService1(false)
                        setService2(false)
                        setService3(false)
                    }}>
                        <ImCross/>
                    </span>
                    
                    <div className="top center column">
                        <MdEditSquare className="icon"/>
                        <h1 style={{margin:"10px 0", letterSpacing:"1px"}}>Branding Desiner</h1>
                        <h4 className={`${lightBg ? "d-sub-text" : "l-sub-text"}`} style={{margin:"10px 0", padding:"10px",textAlign:"center", letterSpacing:"1.2px"}}>
                            Services with more than 2 years of experience. Providing quality work to my Clients.
                        </h4>
                    </div>
                    <div className="s-list d-flex column">
                        <span className="list"><AiFillCheckCircle className="tick"/> Diverse Range of Projects </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Case Studies </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Consistency and Cohesion </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Creativity and Originality </span>
                        <span className="list"><AiFillCheckCircle className="tick"/> Process and Concept Development </span>
                    </div>
                    </div>
                </div>
                )
            }

           

        </div>
    );
}

export default Services;
