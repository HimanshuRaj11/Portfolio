import "./Contact.css";
import {RiMailSendLine,RiWhatsappFill} from "react-icons/ri"
import {BiCurrentLocation} from "react-icons/bi"

const Contact = ({ lightBg }) => {
  return (
    <div className="Contact center column" id="Contact">
      <div className="top center column" style={{height:"15vh"}}>
        <h1>CONTACT ME</h1>
        <h4 className={`${lightBg ? "d-sub-text" : "l-sub-text"}`}>
          Get in Touch
        </h4>
      </div>

      <div className="contact-container center wrap">

            <div data-aos="fade-up" className={`c-card center column ${lightBg?"light-comp":"dark-comp"} `} onClick={(e)=>{
                window.location.href = "mailto:himanshurajyadav11@gmail.com"
                e.preventDefault()
            }}>
                <RiMailSendLine className="icon"/>
                <h3>Email</h3>
                <h5>himanshurajyadav11@gmail.com</h5>
            </div>

            <div data-aos="fade-up" className={`c-card center column ${lightBg?"light-comp":"dark-comp"} `} onClick={(e)=>{
                window.location.href = "tel:+917320869391"
                e.preventDefault()
            }}>
                <RiWhatsappFill className="icon"/>
                <h3>Whatsapp</h3>
                <h5>+91 7320869391</h5>
            </div>

            <div data-aos="fade-up" className={`c-card center column ${lightBg?"light-comp":"dark-comp"} `} onClick={(e)=>{
                window.location.href = "tel:+917320869391"
                e.preventDefault()
            }}>
                <BiCurrentLocation className="icon"/>
                <h3>Location</h3>
                <h5>Jhanjeri,Mohali,Punjab {"(140703)"} </h5>
            </div>

            
      </div>
    </div>
  );
};

export default Contact;
