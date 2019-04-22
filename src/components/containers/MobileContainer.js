import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'gatsby'
import SidebarMenuMobile from '../menus/SidebarMenuMobile'
import Logo from '../common/Logo'
import Footer from '../common/Footer'
import 'semantic-ui-css/semantic.min.css'
import '../../styles/global.scss'
import {
  Menu,
  Sidebar,
  Container,
  Button,
  Icon,
} from 'semantic-ui-react'

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Sidebar.Pushable className='hide-on-desktop'>
        <Sidebar
          as={Menu}
          animation='push'
          direction='right'
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <SidebarMenuMobile />
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Container className='menu-container'>
            <Menu secondary size='large' className='main-menu'>          
              <Menu.Item as={Link} to='/' className='logo'>
                <Logo />
              </Menu.Item>             

              <Menu secondary floated='right'>
                <div className='hide-on-mobile'>
                  <Menu.Item>
                    <Button color='red' size='huge' as={Link} to='/'>
                      GET STARTED
                    </Button>
                  </Menu.Item>
                </div>

                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' /> MENU
                </Menu.Item>
              </Menu>  
            </Menu>
          </Container>  

          {children}          
          
          <Footer />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default MobileContainer