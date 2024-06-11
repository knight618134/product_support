import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Help() {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-[511px] sm:h-[600px]">
      <div
        style={{
          backgroundImage: "url(/img/help_center.png)",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "multiply",
        }}
        className="bg-cover h-full bg-no-repeat bg-center"
      ></div>
      <div className="absolute top-0 left-10 w-full h-full flex flex-col justify-center">
        <h1 className="text-white text-2xl sm:text-3xl font-bold">
          <Trans>{t("need_more_help")}</Trans>
        </h1>
        <p className="text-white text-lg mt-3 font-bold">
          <Trans>{t("please_contact_us")}</Trans>
        </p>
        <span className="text-white text-lg mt-10 font-bold">
          <FontAwesomeIcon icon={faPhone} className="text-white mr-3" />{" "}
          +886-2-8798-2888 #1234
        </span>

        <span className="text-white text-lg mt-3 font-bold">
          <FontAwesomeIcon icon={faEnvelope} className="text-white mr-3" />{" "}
          5G-Sales@liteon.com
        </span>
      </div>
    </div>
  );
}
