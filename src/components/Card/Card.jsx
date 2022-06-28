import React from "react";
import "./Card.css";

const Card = ({ year, academy, qualification_1, qualification_2, department, internships, detail_1, project, detail_2, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      {/* <img src={emoji} alt="" /> */}
      <span>{year}</span>
      <span>{academy}</span>
      <span>{qualification_1}</span>
      <span>{qualification_2}</span>
      <span>{department}</span>
      <br />
      <span>{internships}</span>
      <span>{detail_1}</span>

      <span>{project}</span>
      <span>{detail_2}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
