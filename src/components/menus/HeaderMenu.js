import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Logo from '../common/Logo'
import {
  Container,
  Menu,
  Button,
  Dropdown,
} from 'semantic-ui-react'

const HeaderMenu = () => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const mainMenuLinksData = data.site.siteMetadata.mainMenuLinks
        const servicesMenuLinksData = data.site.siteMetadata.servicesMenuLinks
        return (
          <Container className='menu-container'>
            <Menu secondary size='large' className='main-menu'>          
              <Menu.Item as={Link} to='/' className='logo'>
                <Logo />
              </Menu.Item>
              <Menu.Item as={Link} to='/'>Home</Menu.Item>

              <Dropdown item text='Services'>
                <Dropdown.Menu>
                  {servicesMenuLinksData.map((item) => {
                    return <Dropdown.Item as={Link} to={item.link}>{item.name}</Dropdown.Item>  
                  })}
                </Dropdown.Menu>
              </Dropdown>
                    
              {mainMenuLinksData.map((item) => {              
                return <Menu.Item as={Link} name={item.name} to={item.link} />;
              })}

              <Menu.Item position='right'>
                <Button color='red' size='huge' as={Link} to='/'>
                  GET STARTED
                </Button>
              </Menu.Item>          
            </Menu>
          </Container>
        )  
      }
    }
  />
)

export default HeaderMenu

const query = graphql`
  query HeaderMenuQuery {
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