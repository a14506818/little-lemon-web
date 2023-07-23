import React from "react";
import "./About.css";
import aboutImg_A from "../assets/Mario and Adrian A.jpg";
import aboutImg_B from "../assets/Mario and Adrian b.jpg";

const About = () => {
  return (
    <div className="aboutBG">
      <div className="about">
        <div className="textArea">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className="imgArea">
          <img
            src={aboutImg_A}
            alt="about img A"
            width="276px"
            height="338px"
          />
          <img
            src={aboutImg_B}
            alt="about img B"
            width="276px"
            height="338px"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
