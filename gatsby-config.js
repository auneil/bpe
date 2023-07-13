/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `BPE - bestphotoediting`,
    siteUrl: `https://bestphotoediting.com.au/`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        // The filepath and name to Index Sitemap. Defaults to '/sitemap.xml'.
        output: "/sitemap.xml",
        exclude: [`/dev-404-page`, `/404`, `/404.html`],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://bestphotoediting.com.au",
        sitemap: "https://bestphotoediting.com.au/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
