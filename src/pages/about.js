import * as React from "react"
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'

const About = ({ data: { allContentfulRecipe: { nodes: recipes } } }) => {
    console.log(recipes)
    return (
        <>
            <Layout>

                <main className='page'>
                    <section className='about-page'>
                        <article className=''>
                            <h2>
                                I'm a baby coloring book poke taxidermy
                            </h2>
                            <p>
                                Literally ugh chambray retro, poutine shabby chic flannel messenger bag lo-fi salvia authentic synth celiac gochujang.Truffaut YOLO farm-to-table, quinoa hoodie intelligentsia kinfolk flannel
                            </p>
                            <p>XOXO poutine fingerstache af prism. Selfies salvia chicharrones marfa unicorn biodiesel organic lomo praxis narwhal big mood. Hella</p>
                            <Link to='/contact' className='btn'>Contact</Link>
                        </article>

                        <StaticImage className="about-img" placeholder='blurred' src="../assets/images/about.jpeg" alt="person pouring salt in bowl" />

                    </section>
                    <section className='featured-recipes'>
                        <h5>Look at this awesomesauce!</h5>
                        <RecipesList recipes={recipes} />
                    </section>
                </main>
            </Layout>
        </>

    )
}

export const query = graphql`
  {
    allContentfulRecipe(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`



export default About