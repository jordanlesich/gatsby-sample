module.exports = {
  siteMetadata: {
    title: `Jordan Lesich's Blog`,
    description: 'Articles about Green Web Development in Toronto',
    author: `@gatsbyjs`,
    siteUrl: 'https://elastic-mirzakhani-9cbc0b.netlify.com/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Markdown Blog`,
        short_name: `mdb`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-netlify'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}
