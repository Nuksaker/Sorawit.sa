import React, { useContext } from "react";
import "./About.css";
import Card from "../Card/Card";
// import HeartEmoji from "../../img/heartemoji.png";
// import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "tween",
  };

  return (
    <div className="About" id="about">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About Me</span>
        <span>Educational</span>
        <span>
          Information about educational and internships
        </span>
        <a href={Resume} download>
          <button className="button s-button">Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right */}
      <div className="cards">

        {/* first card */}
        <motion.div
          initial={{ right: "-2rem" ,top: "-4rem"}}
          whileInView={{ left: "7rem" }}
          transition={transition}
        >
          <Card
            year={"2013-2016"}
            heading={"Yasothon Technical College"}
            detail={"Vocational Certificate"}
            academy={"( Voc. Cert. )"}
            department={"Computer Technology"}
            internships={"Internships"}
            detail_2={"Cat Telecom"}
            project={"Project"}
            detail_3={"Digital height gauge and weight scale."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ right: "-11rem", top: "10rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
        >
          <Card
            year={"2016-2018"}
            heading={"Yasothon Technical College"}
            detail={"High Vocational Certificate"}
            academy={"( High Voc. Cert. )"}
            department={"Computer Hardware"}
            internships={"Internships"}
            detail_2={"Cat Telecom"}
            project={"Project"}
            detail_3={"Piggy bank separates coins and counts coins automatically."}
          />
        </motion.div>
        
        {/* 3rd */}
        <motion.div
          initial={{ top: "14rem", left: "25rem" }}
          whileInView={{ left: "57rem" }}
          transition={transition}
        >
          <Card
            // emoji={Humble}
            year={"2018-Present"}
            heading={"Rajamangala University Of Technology Isan ,RMUTI"}
            detail={"Bachelor of Engineering"}
            academy={"( B.Eng. )"}
            department={"Computer Engineering"}
            internships={"Internships"}
            detail_2={"-"}
            project={"Project"}
            detail_3={"Develop EA learning Management System. (I am working on it)"}โปรแกรมส่งเสริมการเรียนรู้ด้วยตนเองผ่านระบบอิเล็กทรอนิกส์
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
