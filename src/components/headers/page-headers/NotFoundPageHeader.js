import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import HeaderMenu from '../../menus/HeaderMenu'
// Use FullHeaderColorBg component if you need to use color background
import FullHeaderImageBg from '../FullHeaderImageBg'
import FullHeaderText from '../FullHeaderText'

const NotFoundPageHeader = () => (
  <StaticQuery
    query={query}
    render={
      data => {
        const title = 'Page Not Found'
        const subtitle = 'Oops! The page you are looking for has been removed or relocated.'
        const buttonText = 'Go To Home Page'
        const linkTo = '/'
        const imageData = data.imageBg.childImageSharp.fluid
        const headerImageClass = 'full-header-image-bg innerpage'
        const headerTextClass = 'full-header-text-container innerpage'

        return (
          <div>    
            <div className='hide-on-desktop hide-on-tablet'>
              <FullHeaderImageBg className={headerImageClass} imageData={imageData}></FullHeaderImageBg>
              <FullHeaderText 
                title={title}
                subTitle={subtitle}
                withButton
                buttonText={buttonText}
                linkTo={linkTo}
                className={headerTextClass}
              />
            </div>

            <div className='hide-on-mobile hide-on-desktop'>
              <FullHeaderImageBg className={headerImageClass} imageData={imageData}>
                <FullHeaderText 
                  title={title}
                  subTitle={subtitle}
                  withButton
                  buttonText={buttonText}
                  linkTo={linkTo}
                  className={headerTextClass}
                />
              </FullHeaderImageBg>
            </div>

            <div className='hide-on-mobile hide-on-tablet'>
              <HeaderMenu />
              <FullHeaderImageBg className={headerImageClass} imageData={imageData}>
                <FullHeaderText 
                  title={title}
                  subTitle={subtitle}
                  withButton
                  buttonText={buttonText}
                  linkTo={linkTo}
                  className={headerTextClass}
                />
              </FullHeaderImageBg>
            </div>  
          </div>
        )
      }
    }
  />   
)

export default NotFoundPageHeader

const query = graphql`
  query NotFoundPageHeaderQuery {
    imageBg: file(relativePath: { eq: "header/header-bg-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`