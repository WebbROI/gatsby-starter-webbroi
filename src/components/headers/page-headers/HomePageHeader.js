import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import HeaderMenu from '../../menus/HeaderMenu'
// Use FullHeaderColorBg component if you need to use color background
import FullHeaderImageBg from '../FullHeaderImageBg'
import FullHeaderText from '../FullHeaderText'

const HomeHeader = () => (
  <StaticQuery
    query={query}
    render={
      data => {
        const title = 'Project Name'
        const subtitle = 'Just Another Awesome New Project'
        const buttonText = 'Learn More'
        const linkTo = '/'
        const imageData = data.imageBg.childImageSharp.fluid

        return (
          <div>    
            <div className='hide-on-desktop hide-on-tablet'>
              <FullHeaderImageBg imageData={imageData}></FullHeaderImageBg>
              <FullHeaderText 
                title={title}
                subTitle={subtitle}
                withButton
                buttonText={buttonText}
                linkTo={linkTo}
              />
            </div>

            <div className='hide-on-mobile hide-on-desktop'>
              <FullHeaderImageBg imageData={imageData}>
                <FullHeaderText 
                  title={title}
                  subTitle={subtitle}
                  withButton
                  buttonText={buttonText}
                  linkTo={linkTo}
                />
              </FullHeaderImageBg>
            </div>

            <div className='hide-on-mobile hide-on-tablet'>
              <FullHeaderImageBg imageData={imageData}>
                <HeaderMenu />
                <FullHeaderText 
                  title={title}
                  subTitle={subtitle}
                  withButton
                  buttonText={buttonText}
                  linkTo={linkTo}
                />
              </FullHeaderImageBg>
            </div>  
          </div>
        )
      }
    }
  />   
)

export default HomeHeader

const query = graphql`
  query HomeHeaderQuery {
    imageBg: file(relativePath: { eq: "header/header-bg-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`