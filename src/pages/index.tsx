import React, { useState } from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import Product from "../components/product";
import TotalSolution from "../components/totalSolution";
import Card from "../components/card";
import Help from "../components/help";
import Footer from "../components/footer";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { releaseData } from "../utils/data";
import { ReleaseDataType } from "../utils/type";

const IndexPage = () => {
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
    <div className="min-h-screen w-[100vw] flex flex-col bg-white dark:bg-[#1a202c]">
      <Header />
      <TotalSolution />

      <main className="w-full flex  px-12 my-12">
        <div className=" w-[100%]">
          <Product fetchFwData={fetchFwData} />
          {firmwareData.length > 0 &&
            firmwareData.map((item: ReleaseDataType, index: number) => (
              <Card key={item.index} payload={item} index={index} />
            ))}
        </div>
      </main>

      <Help />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
