import React from "react";
import "./Card.css";

const Card = ({ year, heading, detail, department, academy, internships, detail_2, project, detail_3, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      {/* <img src={emoji} alt="" /> */}
      <span>{year}</span>
      <span>{heading}</span>
      <span>{detail}</span>
      <span>{academy}</span>
      <span>{department}</span>
      <br />
      <span>{internships}</span>
      <span>{detail_2}</span>

      <span>{project}</span>
      <span>{detail_3}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
