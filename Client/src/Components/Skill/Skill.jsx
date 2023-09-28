import React, { useEffect, useState } from "react";
import "./Skill.css";
import SkillBox from "./SkillBox";


const Skill = ({lightBg}) => {


    const [skills, setSkills] = useState([
        {
            name:"HTML5",
            percentage:65
    },
        {
            name:"CSS3",
            percentage:60
    },
        {
            name:"JavaScript ES6",
            percentage:45
    },
        {
            name:"React Js",
            percentage:75
    },
        {
            name:"Node Js",
            percentage:58
    },
        {
            name:"Mongodb",
            percentage:60
    },
        {
            name:"Python",
            percentage:20
    },
])


  return (
    <div className="Skill center column" id="Skills">
        <div className="head center column" style={{height:"15vh",margin:"30px 0"}}>

        <h1>MY SKILLS</h1>
        <h5 className={`${lightBg ? "d-sub-text" : "l-sub-text"}`}>My Tecinical Level</h5>
        </div>
      <div className="s-container center">
        {
            skills.map((skill,i)=>(
                <>
                <SkillBox key={i+1} name={skill.name} percentage={skill.percentage} i={i}/>
                </>
            ))
        }
       
      </div>
    </div>
  );
};

export default Skill;
