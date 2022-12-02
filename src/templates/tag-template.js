import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'


const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className='page'>
        <h2>
          tag {pageContext.tag}
        </h2>
        <div className='tag-recipes'>
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($tag: String) {
    allContentfulRecipe(sort: {title: ASC}, filter: {content: {tags: {eq: $tag}}}) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }`

export default TagTemplate