/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `BPE - bestphotoediting`,
    siteUrl: `https://bestphotoediting.com.au/`,
  },
  trailingSlash: "never",
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-K32PSXBFKG",
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id

        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,

        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ],
};
