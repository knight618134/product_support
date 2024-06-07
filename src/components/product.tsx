import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

export default function product() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <h1>
          <Trans>Product!</Trans>
        </h1>
      </div>

      <div className="w-1/2">
        <img src="你的圖片路徑" alt="相關圖片" />
      </div>
    </div>
  );
}
