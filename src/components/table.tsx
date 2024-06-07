import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const data = [
  { field: "v1.0", value: "LINE BOT_V4.pdf" },
  { field: "v1.1", value: "LINE BOT_V4.pdf" },
  { field: "v1.2", value: "LINE BOT_V4.pdf" },
];

const downloadPDF = (val: string) => {
  const link = document.createElement("a");
  link.href = `/file/${val}`; // 公開訪問的URL（根據Gatsby構建後的路徑）
  link.download = val; // 指定下載文件的名稱
  console.log(link, "link");
  link.click();
};

export default function InfoTable({ title }: { title: string }) {
  const { t } = useTranslation();
  return (
    <div className="mt-3">
      <h1 className="text-3xl ">{title}</h1>
      <table className="min-w-full border-collapse border border-gray-500 mt-3">
        <thead>
          <tr>
            <th className="border border-gray-600 px-4 py-2">
              <Trans>{t("name")}</Trans>
            </th>
            <th className="border border-gray-600 px-4 py-2">
              <Trans> {t("download")}</Trans>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-600 px-4 py-2">
                <Trans>{item.field}</Trans>
              </td>
              <td className="border border-gray-600 px-4 py-2">
                <button
                  onClick={() => downloadPDF(item.value)}
                  className="ml-2 text-blue-600"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
