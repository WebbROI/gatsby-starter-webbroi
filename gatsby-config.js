const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter for Webbroi`,
    titleTemplate: "%s · Gatsby Starter for Webbroi",
    siteUrl: `https://gatsby-starter.webbroi.dev`,
    image: `/gatsby-og-image.jpg`,
    description: `Some description of this project.`,

    mainMenuLinks: [
      { name: 'Sample Page', link: '/sample-page' },
      { name: 'About', link: '/about' },
      { name: 'Contact', link: '/contact' },
    ],

    servicesMenuLinks: [
      { name: 'First Service', link: '/first-service' },
      { name: 'Second Service', link: '/second-service' },
      { name: 'Third Service', link: '/third-service' },
      { name: 'Fourth Service', link: '/fourth-service' },
    ],
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        // Change GTM id of this project
        id: "GTM-1234567",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
  ],
}