import React from "react";
import { Trans, useI18next, useTranslation } from "gatsby-plugin-react-i18next";

export default function TotalSolution() {
  const { languages, originalPath, changeLanguage, language } = useI18next();
  const { t } = useTranslation();
  const handleProductClick = () => {
    console.log(language, "language");
    const lang = language === "ja" ? "ja" : "en-us";
    window.open(`https://www.liteon.com/${lang}/product/714`, "_blank");
  };
  return (
    <div id="product" className="relative w-full h-[511px] sm:h-[600px]">
      <div
        style={{
          backgroundImage: "url(/img/solution.png)",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "multiply",
        }}
        className="bg-cover h-full bg-no-repeat bg-center"
      ></div>

      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-white text-2xl sm:text-4xl font-bold">
          <Trans>{t("total_solution")}</Trans>
        </h1>
        <p className="text-white text-lg mt-5 font-bold">
          <Trans>{t("solution_desc_1")}</Trans>
        </p>
        <p className="text-white text-lg mt-5 font-bold">
          <Trans>{t("solution_desc_2")}</Trans>
        </p>
        <button
          onClick={handleProductClick}
          className="bg-[#00b0b9] p-2 px-5 mt-16 text-white"
        >
          {t("find_more")}
        </button>
      </div>
    </div>
  );
}
