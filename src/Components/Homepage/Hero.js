import React, { useContext } from "react";
import Button from "../Reusables/Button";
import HeroImage from "../../Images/handsome-young-african-man-lg.png";
import UserContext from "../../Context/User/userContext";

import { Element } from "react-scroll";
import { Link } from "react-router-dom";

function Hero() {
  const [user] = useContext(UserContext);

  console.log(user);
  return (
    <>
      <Element id="hero" name="hero">
        <section className="hero">
          <div className="hero-text">
            <div className="content d-flex justify-content-start flex-column container">
              <div className="row">
                <div className="col-12 col-lg-8 mt-5">
                  <h1 className="font-weight-bold hero-header mb-2">Never run out of Airtime / Data</h1>
                </div>
                <div className="col-12 col-lg-8">
                  <p className="mb-2 hero-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    deleniti laborum qui quibusdam est. Ipsum?
                  </p>
                </div>
                <div className="col-12 col-lg-8">
                  <Link to="/login">
                    <Button
                      btn="Get Started"
                      btnClass="button btnMid hero-btn"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
}

export default Hero;
