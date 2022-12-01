import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags'
const tags = ({ data }) => {

    const tags = setupTags(data.allContentfulRecipe.nodes)
    console.log(tags)
    return (
        <Layout>
            <main className='page'>
                <section className='tags-page'>
                    {tags.map((tag, index) => {
                        const [text, value] = tag
                        return <Link to={`/${text}`} key={index} className="tag">
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