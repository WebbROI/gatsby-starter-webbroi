import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Logo = () => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const imageData = data.logo.childImageSharp.fluid
        return (
          <Img fluid={imageData} style={{ margin: '0 auto', width: '30px' }} />
        )
      }
    }
  />
)

export default Logo

const query = graphql`
  query LogoQuery {
    logo: file(relativePath: { eq: "header/gatsby-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`