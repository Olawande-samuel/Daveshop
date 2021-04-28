import React, {useContext} from "react";
import Button from "../Reusables/Button";
import HeroImage from "../../Images/handsome-young-african-man-lg.png";
import UserContext from "../../Context/User/userContext"

import {
  Element,
  Link as ScrollLink,
  // animateScroll as Scroll,
} from "react-scroll";
import { Link } from "react-router-dom";


function Hero() {
  const [user]=useContext(UserContext)
  return (
    <>
      <Element id="hero" name="hero">
        <section className={user.message === 'Login successful.' ? "hide" : "hero"}>
          <div className="left">
            <div className="content">
              <h1>Recharge Easy with DATASHOPNG</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                deleniti laborum qui quibusdam est. Ipsum?
              </p>

              <Link
                to="/login"
              >
                <Button btn="Get Started" btnClass="button btnMid" />
              </Link>

              
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <div className="right-img">
                <img
                  src={HeroImage}
                  alt="Handsome Young African Man Staring at His Phone "
                  className="top-img"
                />
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
}

export default Hero;
