import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Card from "./card";
import { maggieData } from "../utils/data";
import { ReleaseDataType } from "../utils/type";

export default function maggiePage() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <p className="text-[32px] sm:text-[40px] mt-14 mb-4 font-bold">
        {"Download Center"}
      </p>
      <p className="text-[16px] sm:text-[18px] mb-10">
        {"You can download all 5G related product documents here."}
      </p>

      {maggieData.length > 0 &&
        maggieData.map((item: ReleaseDataType, index: number) => (
          <Card key={item.index} payload={item} index={index} />
        ))}
    </div>
  );
}
