import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import school from "/src/assets/images/ccs.png";
import slide2 from "/src/assets/images/slide2.jpg";
import slide3 from "/src/assets/images/slide3.jpeg";
import slide4 from "/src/assets/images/slide4.jpg";
import slide5 from "/src/assets/images/slide5.jpeg";

const Mainhero = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    snap: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "100%",
  };
  return (
    <div className="maincont">
      <div className="left">
        <h2>
          CAMBRIDGE CONVENT <br /> SCHOOL
        </h2>
        <p>
          Cambridge Convent School is constructed with a unique architectural
          design for developing the potential of each child.
        </p>
        <button>Admissions Open 2024-25</button>
      </div>
      <div className="right">
        <Splide options={options} aria-label="My Favorite Images">
          <SplideSlide className="splideimg">
            <img src={school} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide2} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide3} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide4} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide5} alt="Image 2" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Mainhero;
