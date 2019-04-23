import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import {
  Segment,
  Grid,
  Header,
  Button,
  Icon,
} from 'semantic-ui-react'

const TwoColumns = () => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const imageDataOne = data.imageOne.childImageSharp.fluid
        const imageDataTwo = data.imageTwo.childImageSharp.fluid
        const imageDataThree = data.imageThree.childImageSharp.fluid

        return (
          <Segment className='two-columns-segment' vertical>
            <Grid container stackable verticalAlign='middle' className='grid-container'>
              <Grid.Column width={8}>
                <Img fluid={imageDataOne} className='image' />
              </Grid.Column>
              <Grid.Column width={8}>
                <p className='small-paragraph'>SERVICES</p>
                <Header as='h2' className='title'>
                  First Service
                </Header>
                <p className='paragraph'>
                  Galaxies preserve and cherish that pale blue dot muse about prime number courage of our questions billions upon billions?
                </p>
                <Button primary size='huge' as={Link} to='/'>
                  Learn More
                  <Icon name='right arrow' />
                </Button>
              </Grid.Column>
            </Grid>
            <Grid container stackable verticalAlign='middle' reversed='mobile' style={{ padding: '1em 0em' }}>
              <Grid.Column width={8}>
                <p className='small-paragraph'>SERVICES</p>
                <Header as='h2' className='title'>
                  Second Service
                </Header>
                <p className='paragraph'>
                  Corpus callosum intelligent beings colonies the sky calls to us the sky calls to us cosmic ocean.
                </p>
                <Button primary size='huge' as={Link} to='/'>
                  Learn More
                  <Icon name='right arrow' />
                </Button>
              </Grid.Column>
              <Grid.Column width={8}>
                <Img fluid={imageDataTwo} className='image' />
              </Grid.Column>      
            </Grid>
            <Grid container stackable verticalAlign='middle' style={{ padding: '1em 0em' }}>
              <Grid.Column width={8}>
                <Img fluid={imageDataThree} className='image' />
              </Grid.Column>
              <Grid.Column width={8}>
                <p className='small-paragraph'>SERVICES</p>
                <Header as='h2' className='title'>
                  Third Service
                </Header>
                <p className='paragraph'>
                  Rich in heavy atoms how far away gathered by gravity made in the interiors of collapsing stars how far away the ash of stellar alchemy.
                </p>
                <Button primary size='huge' as={Link} to='/'>
                  Learn More
                  <Icon name='right arrow' />
                </Button>
              </Grid.Column>
            </Grid>
          </Segment>
        )
      }
    }
  />    
)

export default TwoColumns

const query = graphql`
  query TwoColumnsQuery {
    imageOne: file(relativePath: { eq: "desert-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "desert-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "desert-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`