import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'
import SEO from '../components/SEO'
const tags = ({ data }) => {

  const tags = setupTags(data.allContentfulRecipe.nodes)
  console.log(tags)
  return (
    <Layout>
      <SEO title="Tags" />
      <main className='page'>
        <section className='tags-page'>
          {tags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return <Link to={`/tags/${slug}`} key={index} className="tag">
              <h5>{text}</h5>
              <p>{value} recipe</p>
            </Link>
          })}
        </section>
      </main>
    </Layout>

  )
}


export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`


export default tags