import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import {
  Menu,
} from 'semantic-ui-react'

const SidebarMenuMobile = () => (
  <StaticQuery
    query={query}
    render={
      data => {
        const mainMenuLinksData = data.site.siteMetadata.mainMenuLinks
        const servicesMenuLinksData = data.site.siteMetadata.servicesMenuLinks
        return (
          <div className='sidebar-menu-container'>
            <Menu.Item className='menu-item' as={Link} to='/'>Home</Menu.Item>

            <Menu.Item className='menu-item'>Services
              <Menu.Menu className='menu-sub-items'>
                {servicesMenuLinksData.map((item) => {
                  return <Menu.Item className='menu-item' as={Link} to={item.link}>{item.name}</Menu.Item>
                })}
              </Menu.Menu>
            </Menu.Item>

            {mainMenuLinksData.map((item) => {              
              return <Menu.Item className='menu-item' as={Link} name={item.name} to={item.link} />;
            })}

            <div className='hide-on-tablet'>
              <Menu.Item className='menu-item-red-bg' to='/'>GET STARTED</Menu.Item>
            </div>
          </div>
        )  
      }
    }
  />      
)

export default SidebarMenuMobile

const query = graphql`
  query SidebarMenuQuery {
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