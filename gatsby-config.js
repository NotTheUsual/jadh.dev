module.exports = {
  siteMetadata: {
    title: `JADH | Web, design`,
    description: `Once again, I (James Hunter) have made a website for myself, and once again I have no idea what to put on it.`,
    author: `@jadhunter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JADH`,
        short_name: `JADH`,
        start_url: `/`,
        background_color: `#000033`,
        theme_color: `#000033`,
        // display: `minimal-ui`,
        icon: `src/images/JADHLogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: 'async',
        enableListener: true,
        preconnect: ['https://use.typekit.net'],
        web: [{
          name: 'Museo Slab',
          file: `https://use.typekit.net/zbp8hbn.css`
        }]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
