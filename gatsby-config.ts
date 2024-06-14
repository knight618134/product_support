import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `litenetics_support`,
    siteUrl: `https://5g.liteon.com:8083`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/locales`,
        name: `locale`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locale`,
    //     languages: [`en`, `ja`],
    //     defaultLanguage: `en`,
    //     siteUrl: `http://localhost:8000/`,
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false,
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //     pages: [
    //       {
    //         matchPath: "/:lang?/blog/:uid",
    //         getLanguageFromPath: true,
    //         excludeLanguages: ["es"],
    //       },
    //       {
    //         matchPath: "/preview",
    //         languages: ["en"],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`,
        defaultLanguage: `en`,
        languages: [`en`],
        // 其他必要配置
      },
    },
  ],
};

export default config;
