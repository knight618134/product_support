import React, { useState } from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import Product from "../components/product";
import TotalSolution from "../components/totalSolution";
import Card from "../components/card";
import Help from "../components/help";
import Footer from "../components/footer";
import MaggieFooter from "../components/maggieFooter";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { releaseData } from "../utils/data";
import { ReleaseDataType } from "../utils/type";

import MaggieHeader from "../components/maggieHeader";
import MaggiePage from "../components/maggiePage";
const IndexPage = () => {
  const { i18n } = useTranslation();
  i18n.changeLanguage("en");
  const { t } = useTranslation();
  const [firmwareData, setFirmwareData] = useState<ReleaseDataType[]>([]);

  const fetchFwData = (value: string) => {
    console.log(value);
    const filterReleaseData: ReleaseDataType[] = releaseData.filter(
      (item) => item.modelName === value
    );
    console.log(filterReleaseData, "filterReleaseData");
    setFirmwareData(filterReleaseData);
  };

  return (
    <main className="min-h-screen w-full flex flex-col bg-white dark:bg-[#1a202c]">
      {/* <Header /> */}
      <MaggieHeader />
      {/* <TotalSolution /> */}
      <div className="w-full flex flex-col px-4 sm:px-12 my-16" id="support">
        <MaggiePage />
      </div>
      {/* <Product fetchFwData={fetchFwData} /> */}
      {/* {firmwareData.length > 0 &&
          firmwareData.map((item: ReleaseDataType, index: number) => (
            <Card key={item.index} payload={item} index={index} />
          ))}
      {/* <Help /> */}

      <MaggieFooter />
      {/* <Footer /> */}
    </main>
  );
};

export default IndexPage;

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;
