import React, { useState, useEffect } from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center p-5 bg-[#EAEAEA] dark:bg-[#1a202c] shadow-md z-10">
      <img
        src="/img/footer_logo.png"
        alt="footer_logo"
        style={{ maxWidth: "100%", height: "auto", display: "inline-block" }}
      />

      <div className="flex items-center">
        <a
          href="https://www.facebook.com/LITEONLife.tw/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-blue-600 text-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/@liteon.official?reload=9"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/company/liteon?originalSubdomain=tw"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-blue-600 text-xl"
          />
        </a>
        <span className="ml-3">
          ©LITE-ON Technology Corporation. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
