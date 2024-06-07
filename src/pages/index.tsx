import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import Product from "../components/product";
import InfoTable from "../components/table";
import Footer from "../components/footer";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-[100vw] flex flex-col bg-slate-50 dark:bg-[#1a202c]">
      <Header />
      <main className="flex flex-grow pt-16">
        {/* 這裡 pt-16 確保讓出 header 的高度 */}
        <div className="w-[15%]"></div>
        <div className="w-[70%] p-5">
          <Product />
          <InfoTable title={"All-in-one"} />
          <InfoTable title={"ORU"} />
        </div>
        <div className="w-[15%]"></div>
      </main>
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
