import React from "react";
import logo from "/src/assets/images/logo.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="Nav" id="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="othernav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Acedemic</a>
          </li>
          <li>
            <a href="/">Faciities</a>
          </li>
        </ul>
        <button>
          Call Now <BiSolidPhoneCall style={{ fontSize: "22px" }} />
        </button>
        <CgDetailsMore
          className="moreicon"
          style={{ display: "block", fontSize: "32px" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
