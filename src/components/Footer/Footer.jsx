import { React, useContext } from "react";
import "./Footer.css";
import { themeContext } from "../../Context";

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="footer">
      <div className="f-content">
        <span style={{color: darkMode?'white': ''}}>© 2021  Sorawit</span>
        
      </div>
    </div>
  );
};

export default Footer;
