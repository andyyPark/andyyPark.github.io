import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <ul id="icons01" className="icons">
        <li>
          <a href="https://github.com/andyyPark">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="">
            <i className="ai ai-cv"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andyypark/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="https://ui.adsabs.harvard.edu/search/q=docs(library%2FLr_06Pu6TtO4DA4Vns1BOQ)&sort=date%20desc%2C%20bibcode%20desc&p_=0">
            <i className="ai ai-ads"></i>
          </a>
        </li>
        <li>
          <a href="mailto:chanhyup@andrew.cmu.edu">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Footer;
