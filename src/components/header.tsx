import React, { useState, useEffect } from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { langOption } from "../utils/data";

const Header = () => {
  const { languages, originalPath, changeLanguage, language } = useI18next();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const handleThemeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage, originalPath);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = document.querySelector("header").offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-3 bg-[#00b0b9] dark:bg-[#1a202c] shadow-md z-10">
      <div className="flex">
        <Link to="/" className="mr-16">
          <img
            src="/img/header_logo.png"
            alt="header_logo"
            className="h-6 sm:h-8"
          />
        </Link>
        <nav className="flex items-center ml-10 space-x-16">
          <span
            onClick={() => handleScrollTo("product")}
            className="text-white hover:cursor-pointer"
          >
            Product
          </span>
          <span
            onClick={() => handleScrollTo("support")}
            className="text-white hover:cursor-pointer"
          >
            Support
          </span>
          <span
            onClick={() => handleScrollTo("contact")}
            className="text-white hover:cursor-pointer"
          >
            Contact Us
          </span>
        </nav>
      </div>
      <div className="flex items-center">
        <select
          onChange={handleChange}
          value={language}
          className="block w-full px-4 py-2 mt-2 text-base text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b0b9] focus:border-transparent mr-4 p-2 bg-white dark:bg-gray-700 dark:text-white"
        >
          {languages.map((lng) => (
            <option
              key={lng}
              value={lng}
              className="text-base text-gray-700 bg-white dark:bg-gray-700 dark:text-white"
            >
              {langOption.find((item) => item.value === lng)?.label || ""}
            </option>
          ))}
        </select>
        <button onClick={handleThemeToggle} className="p-2">
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} className="text-white" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="text-white" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
