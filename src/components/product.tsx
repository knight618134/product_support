import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { componentTypeOptions, deviceModelOptions } from "../utils/data";

export default function Product({
  fetchFwData,
}: {
  fetchFwData: (val: string) => void;
}) {
  const { t } = useTranslation();
  const [comtype, setComtype] = useState(5);
  const [deviceModel, setDeviceModel] = useState(
    deviceModelOptions.find((item) => item.comtype === 5)?.label || ""
  );

  const handleComtypeChange = (event: any) => {
    const selectedComtype = Number(event.target.value);
    setComtype(selectedComtype);
    setDeviceModel(
      deviceModelOptions.find((item) => item.comtype === selectedComtype)
        ?.label || ""
    );
  };

  const handleModelChange = (event: any) => {
    setDeviceModel(event.target.value);
  };

  useEffect(() => {
    fetchFwData(deviceModel);
  }, [comtype, deviceModel]);

  useEffect(() => {
    fetchFwData(deviceModel);
  }, []);

  return (
    <div className="w-full">
      <p className="text-[32px] sm:text-[40px] my-2 font-bold">
        {t("download_center")}
      </p>
      <p className="text-[16px] sm:text-[18px] mb-16">
        {t("product_documents_here")}
      </p>
      <p className="text-[16px] sm:text-[18px] my-2">
        {t("select_product_model")}
      </p>

      <select
        className="w-full sm:w-1/5 px-4 py-2 mt-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b0b9] focus:border-transparent"
        value={comtype}
        onChange={handleComtypeChange}
      >
        {componentTypeOptions.map((item) => (
          <option
            key={item.value}
            value={item.value}
            className="text-base text-gray-700 bg-white p-5"
          >
            {item.label}
          </option>
        ))}
      </select>

      <select
        className="w-full sm:w-1/5 px-4 py-2 mt-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b0b9] focus:border-transparent ml-0 sm:ml-5"
        value={deviceModel}
        onChange={handleModelChange}
      >
        {deviceModelOptions
          .filter((item) => item.comtype === comtype)
          .map((item) => (
            <option
              key={item.id}
              value={item.label}
              className="text-base text-gray-700 bg-white"
            >
              {item.label}
            </option>
          ))}
      </select>
    </div>
  );
}
