import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const FullHeaderImageBg = ({ children, className, imageData }) => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const imageDataDefault = data.imageBg.childImageSharp.fluid
        return (
          <BackgroundImage 
            Tag="section"
            className={ className ? className : "full-header-image-bg" }
            fluid={ imageData ? imageData : imageDataDefault }
            backgroundColor={`#000`}
          >
            {children}
          </BackgroundImage>
        )
      }
    }
  />
)

FullHeaderImageBg.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  mobile: PropTypes.bool
}

export default FullHeaderImageBg

const query = graphql`
  query FullHeaderImageBg {
    imageBg: file(relativePath: { eq: "header/header-bg-0.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`