import React, { useState, useEffect } from "react";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { langOption } from "../utils/data";
import "../styles/global.css"; // 確保這裡引用了全局 CSS 文件

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

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
        {/* <nav className="flex items-center ml-10 space-x-16">
          <span
            onClick={() => handleScrollTo("product")}
            className="text-white hover:cursor-pointer underline-animation"
          >
            {t("product")}
          </span>
          <span
            onClick={() => handleScrollTo("support")}
            className="text-white hover:cursor-pointer underline-animation"
          >
            {t("support")}
          </span>
          <span
            onClick={() => handleScrollTo("contact")}
            className="text-white hover:cursor-pointer underline-animation"
          >
            {t("contact_us")}
          </span>
        </nav> */}
      </div>
      {/* <div className="flex items-center">
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
      </div> */}
    </header>
  );
};

export default Header;
