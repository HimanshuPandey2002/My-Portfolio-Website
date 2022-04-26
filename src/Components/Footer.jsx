import React from "react";
import "./css/Footer.css";
import footerCurve from "../Assets/footer-curve.svg";
import footerCurveLight from "../Assets/footer-curve-light.svg";
import github from "../Assets/social/github.svg";
import twitter from "../Assets/social/twitter.svg";
import linkedin from "../Assets/social/linkedin.svg";
import leetcode from "../Assets/social/leetcode.svg";
import instagram from "../Assets/social/instagram.svg";

function Footer({ theme }) {
  return (
    <footer id="connect">
      <img
        className="footer-curve"
        src={theme.name === "dark" ? footerCurve : footerCurveLight}
        alt=""
      />
      <div className="footer">
        <div className="footer-head" id="footer-head">
          Feel free to contact on social media.
        </div>
        <div className="social" id="social">
          <a
            href="https://github.com/HimanshuPandey2002"
            className="social-link"
            target="blank"
          >
            <img src={github} alt="" className="social-icon" />
          </a>
          <a
            href="https://twitter.com/himanshu_295"
            className="social-link"
            target="blank"
          >
            <img src={twitter} alt="" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshupandey29/"
            className="social-link"
            target="blank"
          >
            <img src={linkedin} alt="" className="social-icon" />
          </a>
          <a
            href="https://leetcode.com/schafermike960/"
            className="social-link"
            target="blank"
          >
            <img src={leetcode} alt="" className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/himanshupandey142/"
            className="social-link"
            target="blank"
          >
            <img src={instagram} alt="" className="social-icon" />
          </a>
        </div>
        <div className="btm" id="btm">
          Designed and Developed with ❤️ by Himanshu
        </div>
      </div>
    </footer>
  );
}

export default Footer;
