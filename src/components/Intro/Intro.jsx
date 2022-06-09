import React, { useContext } from "react";
import "./Intro.css";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { images } from "../../constants";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hello! I am</span>
          <span>Sorawit Siamhong</span>
          <span >
              Student of Computer Engineering Likes to code and is creative in developing things.
          </span>
        </div>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Nuksaker" target="something">
            <img src={images.github} alt=""  />
          </a>
          <a href="https://www.facebook.com/Nuksaker" target="something">
            <img src={images.facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/nukker_srw/" target="something">
            <img src={images.instagram} alt="" />
          </a>
          
        </div>
      </div>

      {/* right image side */}
      <div className="i-right">
        <img src={images.Vector5} alt="" className="Vector1" />
        <img src={images.Vector6} alt="" className="Vector2" />
        <img src={images.imgport} alt="" className="imginto" />
        {/* animation */}

        {/* img 1 */}
        <motion.img
          whileHover={{ scale: 0.7 }}
          transition={{ duration: 0.8, type: "tween" }}
          initial={{ left: "-24%" }}
          whileInView={{ left: "7%" }}
          // transition={transition}
          src={images.glasses}
          alt=""
          className="emoji"
        />

        {/* text-1 */}
        <motion.div
          whileHover={{ scale: 1.4 }}
          initial={{ top: "5%", left: "34%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={images.developer} text1="Web" text2="Developer" />
        </motion.div>

        {/* text-2 */}
        <motion.div
          whileHover={{ scale: 1.4 }}
          initial={{ left: "-27%", top: "43%" }}
          whileInView={{ left: "-7%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={images.fullstack} text1="Full Stack" />
        </motion.div>

        {/* text-3 */}
        <motion.div
          whileHover={{ scale: 1.4 }}
          initial={{ top: "64%", left: "31%" }}
          whileInView={{ left: "50%" }}
          transition={transition}
          className="floating-div"
        >
          {/* <img src={glasses} alt="" /> */}
          <FloatinDiv  img={images.backend} text1="Backend" />
        </motion.div>

        <div className="blur" style={{ background: "#b9ff91" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "37rem",
            height: "21rem",
            left: "-5rem",
          }}
        ></div>

      </div>
    </div>
  );
};

export default Intro;
