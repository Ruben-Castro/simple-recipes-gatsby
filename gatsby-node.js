/***
 * 
 * More explicit way of creating dynamic pages 
 * 
 */


// this is necessary since we are in node and not react 
const path = require('path')
const slugify = require('slugify')

// this is the name of the function that gatsby uses to create the pages 
// it expects two input variables graphql and actions 
// this function must be async since we fetch data from our CMS, API etc 
exports.createPages = async ({ graphql, actions }) => {


    // this is a function provided by gatsby to create individual pages 
    const { createPage } = actions


    // this is the query that we use to get the data taht will populate th dynamic page
    const result = await graphql(`
    query GetRecipes {
        allContentfulRecipe {
            nodes {
                content {
                    tags
                }
            }
        }
    }  
    `)

    // here we iterate through all of the data we recieved and foreach entry and tag we create a page that uses the tag as the path and 
    // component from template explicitly specified and we pass in our variable aka tag
    result.data.allContentfulRecipe.nodes.forEach(recipe => {
        recipe.content.tags.forEach(tag => {
            const tagSlug = slugify(tag, { lower: true })
            createPage({
                path: `/tags/${tagSlug}`,
                component: path.resolve(`src/templates/tag-template.js`),
                context: {
                    tag: tag
                },
            })
        })
    })
}