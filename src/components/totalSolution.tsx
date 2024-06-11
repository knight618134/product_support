import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

export default function TotalSolution() {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-[511px]">
      <div
        style={{
          backgroundImage: "url(/img/solution.png)",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "multiply",
        }}
        className="bg-cover h-full bg-no-repeat bg-center  "
      ></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center  ">
        <h1 className="text-white text-4xl font-bold">
          <Trans>{t("total_solution")}</Trans>
        </h1>
        <p className="text-white text-lg mt-5 font-bold">
          <Trans>{t("solution_desc_1")}</Trans>
        </p>
        <p className="text-white text-lg mt-5 font-bold">
          <Trans>{t("solution_desc_2")}</Trans>
        </p>
        <button className="bg-[#00b0b9] p-2 px-5 mt-16 text-white">
          {t("find_more")}
        </button>
      </div>
    </div>
  );
}
