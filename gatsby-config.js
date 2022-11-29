/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/assets/data`
    //   }
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `styles`,
    //     path: `${__dirname}/src/assets/css`
    //   }
    // },

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
}
