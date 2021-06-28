import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container footer-wrapper">
        <div className="top-wrapper d-flex flex-row justify-content-between">
          {/* <div className="lists">
            <h3 className="mb-5 text-decoration-none">Ready to get started</h3>
            <Link className="button bg-light text-secondary rounded" to="/">
              Get started
            </Link>
          </div> */}
          <div className="lists">
            <ul>
              <li>
                <p>Services</p>
              </li>
              <li>
                <Link to="/buy-airtime">Buy Airtime</Link>
              </li>
              <li>
                <Link to="/buy-data">Buy Data</Link>
              </li>
              <li>
                <Link to="/pay-cable-bill">Cable TV</Link>
              </li>
              <li>
                <Link to="/pay-power-bill">Electricity Bills</Link>
              </li>
            </ul>
          </div>
        
          <div className="lists">
            <ul>
              <li>
                <p>Contact us</p>
              </li>
              <li>
                <a href="html">0900000000</a>
              </li>
              <li>
                <a href="mailto:olawande@gmail.com">Hello@Datashopng.com</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="bottom-wrapper d-flex justify-content-between align-items-center">
          <div className="privacy d-flex justify-content-between align-items-center ">
            <Link className="text-light" to="/">
              Terms and Conditions
            </Link>
            <Link className="mx-3 text-light" to="/">
              Privacy
            </Link>
          </div>
          <div className="social">
            <Link to="/">
              <ImFacebook />
            </Link>
            <Link to="/">
              <ImTwitter />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
