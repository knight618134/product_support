import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ReleaseDataType } from "../utils/type";

const downloadPDF = (val: string) => {
  const link = document.createElement("a");
  link.href = `/file/${val}.pdf`; // 公開訪問的URL（根據Gatsby構建後的路徑）
  link.download = val; // 指定下載文件的名稱
  console.log(link, "link");
  link.click();
};

export default function Card({
  payload,
  index,
}: {
  payload: ReleaseDataType;
  index: number;
}) {
  const { t } = useTranslation();
  return (
    <div
      key={payload.index}
      className="mt-5 bg-[#CFEAEC] w-full flex flex-col sm:flex-row justify-between px-8 items-center py-4"
    >
      <div>
        <div className="flex items-center">
          <span className="text-[18px] sm:text-[22px] font-bold mr-5">
            {t("Document") + (index + 1)}
          </span>
          <span className="text-[14px] sm:text-[16px] text-[#00b0b9]">
            {t("Version") + ": " + payload.version}
          </span>
        </div>
        <p className="text-[14px] sm:text-[16px]">{payload.desc}</p>
        <p className="text-[14px] sm:text-[16px]">
          {t("Date") + ": " + payload.date}
        </p>
      </div>
      <div className="mt-4 sm:mt-0">
        <button
          onClick={() =>
            payload.fileName ? downloadPDF(payload.fileName) : undefined
          }
          className="bg-[#00b0b9] p-2 px-5 text-white"
        >
          {t("Download")}
        </button>
      </div>
    </div>
  );
}
