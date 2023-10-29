import React from "react";
import vision from "/src/assets/images/vision.png";
import values from "/src/assets/images/corevalues.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="abouttext">
        <h2>About Us</h2>
      </div>
      <div className="cards">
        <div className="vision">
          <img src={vision} alt="vision" />
          <p>
            Cambridge Convent School weaves “A promise & a possibility” in every
            child. It strives to take the tender buds towards the galaxy of
            knowledge, confidence & success holding their hands with “care” &
            “concern”. It nurtures the roots with aesthetic sense, skill &
            information so that they may accommodate with the global scenario.
          </p>
          <button>Read Vision</button>
        </div>
        <div className="values">
          <img src={values} alt="core values" />
          <p>
            Cambridge Convent School weaves “A promise & a possibility” in every
            child. It strives to take the tender buds towards the galaxy of
            knowledge, confidence & success holding their hands with “care” &
            “concern”. It nurtures the roots with aesthetic sense, skill &
            information so that they may accommodate with the global scenario.
          </p>
          <button>Read Values</button>
        </div>
      </div>
    </div>
  );
};

export default About;
