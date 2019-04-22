import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Icon,
} from 'semantic-ui-react'

const Footer = () => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const mainMenuLinksData = data.site.siteMetadata.mainMenuLinks
        const servicesMenuLinksData = data.site.siteMetadata.servicesMenuLinks
        return (
          <Segment inverted vertical className='footer-segment'>
            <Container>
              <Grid inverted reversed='mobile'>
                <Grid.Row>          
                  <Grid.Column computer={3} tablet={3} mobile={8} className='footer-column'>
                    <Header inverted as='h4' content='Learn More' />
                    <List link inverted>
                      <List.Item as={Link} to='/'>Home</List.Item>
                      {mainMenuLinksData.map((item) => {              
                        return <List.Item as={Link} to={item.link}>{item.name}</List.Item>;
                      })}
                      <List.Item as='a' href='https://google.com' target='_blank' rel='noopener noreferrer'>External Link</List.Item>
                      <List.Item as={Link} to='/'>Privacy Policy</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column computer={3} tablet={3} mobile={8} className='footer-column'>
                    <Header inverted as='h4' content='Services' />
                    <List link inverted>
                      {servicesMenuLinksData.map((item) => {              
                        return <List.Item as={Link} to={item.link}>{item.name}</List.Item>;
                      })} 
                    </List>
                  </Grid.Column>
                  <Grid.Column computer={3} tablet={3} mobile={6} className='footer-column'>
                    <Header inverted as='h4' content='Follow Us' />
                    <List link inverted>
                      <List.Item as='a' href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><Icon name='facebook' />Facebook</List.Item>
                      <List.Item as='a' href='https://twitter.com/' target='_blank' rel='noopener noreferrer'><Icon name='twitter' />Twitter</List.Item>
                      <List.Item as='a' href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'><Icon name='linkedin' />LinkedIn</List.Item>
                      <List.Item as='a' href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'><Icon name='youtube' />Youtube</List.Item>
                      <List.Item as='a' href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><Icon name='instagram' />Instagram</List.Item>
                      <List.Item as='a' href='https://www.yelp.com/' target='_blank' rel='noopener noreferrer'><Icon name='yelp' />Yelp</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column computer={7} tablet={7} mobile={10} className='footer-column'>
                    <Header as='h2' inverted>
                      Project Name
                      </Header>
                    <p>
                      Awesome New Project<br/>
                      1234 Acme Ave., Suite 101<br/>
                      Irvine, CA 92606<br/>
                      <a href='mailto:jon@snow.com'>jon@snow.com</a>
                    </p>
                    <p style={{ color: '#2d3436' }}>Site by <a style={{ color: '#2d3436', textDecoration: 'underline' }} href='https://webbroi.com' target='_blank' rel='noopener noreferrer'>WebbROI</a></p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        )
      }
    }
  />  
)

export default Footer

const query = graphql`
  query FooterMenuQuery {
    site {
      siteMetadata {
        mainMenuLinks {
          name
          link
        }
        servicesMenuLinks {
          name
          link
        }
      }
    }
  }
`