import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
export const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width:200
            height:200
          )
        }
      }
    }
  }
`
const Gallery = () => {
    const data = useStaticQuery(query)
    const nodes = data.allFile.nodes;

    console.log(data)
    return (
        <Wrapper>
            {nodes.map((image, index) => {
                const { name } = image
                const pathToImage = getImage(image)
                console.log(image)
                return <article key={index} className="item">
                    <GatsbyImage image={pathToImage} alt={name} className="gallery-img" />
                    <p>single {name}</p>
                </article>
            })}

        </Wrapper>
    )
}

const Wrapper = styled.section`
width:70vw;
margin:0 auto;
display:flex;
flex-wrap:wrap;
.item {
    margin-right:1rem;

}
.gallery-img {
    border-radius:1rem;
}
`

export default Gallery