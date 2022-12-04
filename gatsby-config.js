/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@rubencastro",
    person: { name: "ruben", age: 25 },
    simpleData: ['item 1', 'item 2'],
    complexData: [{
      name: "Ruben", age: 25
    }, {
      name: "Tiffany", age: 24
    }]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: `async`,
        enableListener: true,

        // use this to preload css files from google fonts 
        preconnect: ["https://fonts.googleapis.com/css?family=Montserrat:400|Inconsolata:400"],
      }
    }
  ],
}
