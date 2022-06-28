import React, { useContext } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { images } from "../../constants";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const scaleVariants = {
    whileInView: {
      scale: [0.5, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
      
      
    },
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Contact <span className="text-2"> Me</span></span>
        </div>
      </div>
      {/* right side form */}
      
      <motion.div 
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="c-right"
      >
        <motion.div
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.8, ease: "easeInOut"}}
          className="floating-div"
        >
          <FloatinDiv img={images.email} text1="sorawit.sa@rmuti.ac.th" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.8, ease: "easeInOut"}}
          className="floating-div"
        >
          <FloatinDiv img={images.facebook} text1="Sorawit's Nukker" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.8, ease: "easeInOut"}}
          className="floating-div"
        >
          <FloatinDiv img={images.instagram} text1="nukker_srw" />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.8, ease: "easeInOut"}}
          
          className="floating-div"
          
        >      
          {/* <a href="https://www.instagram.com/nukker_srw/" target="something">
            <FloatinDiv img={images.github} text1="Nuksaker" />
          </a>    */}
          <FloatinDiv img={images.github} text1="Nuksaker" />
        </motion.div>
      </motion.div>
      <div
            className="blur c-blur1"
            style={{ 
              background: "#0affde",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          >
          </div>
    </div>
  );
};

export default Contact;
