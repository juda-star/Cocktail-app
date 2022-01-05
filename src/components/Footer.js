import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const StyleIconLinkedin = { color: "#0A66C2", font: "larger" };

const StyleIconGit = { color: "#161B22" };

const StyleIconFacebook = { color: "#1877F2" };

const Footer = () => {
  return (
    <div>
      <div className="iocnFooter">
        <a href="http://linkedin.com/in/yehooda-ishta-ba9a9a202">
          <FaLinkedin style={StyleIconLinkedin} />
        </a>

        <a href="https://github.com/yehooda">
          <FaGithubSquare style={StyleIconGit} />
        </a>

        <a href="https://www.facebook.com/yehooda">
          <FaFacebookSquare style={StyleIconFacebook} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
