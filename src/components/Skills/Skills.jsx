import React, { useContext } from "react";
import "./Skills.css";
import { themeContext } from "../../Context";
import { images } from "../../constants";
import { motion } from "framer-motion";

export const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="skills" id="skills">
      <div className="s-left">
        <span style={{ color: darkMode ? "white" : "" }}>Skills</span>
        <span>My Skills</span>
      </div>
      <div className="s-right">
        <div className="Pro-lang">
          <span style={{ color: darkMode ? "white" : "" }}>
            Programing language
          </span>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="circles"
          >
            {[
              images.react,
              images.sass,
              images.html,
              images.css,
              images.js,
              images.mysql,
              images.php,
              images.arduino,
              images.c
            ].map((circle, index) => (
              <div className="block-img">
                <motion.div
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.4, type: "tween" }}
                  className="circle-cmp"
                  key={`circle-${index}`}
                >
                  <img src={circle} alt="icons-skills" />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="Tools">
          <span style={{ color: darkMode ? "white" : "" }}>Tools</span>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="circles"
          >
            {[images.ps, images.vscode, images.docker].map((circle, index) => (
              <div className="block-img">
                <motion.div
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.4, type: "tween" }}
                  className="circle-cmp"
                  key={`circle-${index}`}
                >
                  <img src={circle} alt="icons-skills" />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
    </div>
  );
};
export default Skills;
