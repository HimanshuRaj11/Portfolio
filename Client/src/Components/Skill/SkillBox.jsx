import { useEffect, useState } from "react";

const SkillBox = ({ name, percentage, i }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === percentage) {
        clearInterval(interval);
      } else {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

   const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 700);
   });
 }, []);

  return (
    <div className="skill-box" data-aos="fade-up">
      <div className="s-circle">
        <div className="outer-c center">
          <div className="inner-c center column">
            <div className={` ${scroll?"number c-text":""} `}>{counter}%</div>
            <div className="s-name c-text">{name}</div>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="70"
            className={` ${scroll?`circle-${i}`:""} `}
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SkillBox;
