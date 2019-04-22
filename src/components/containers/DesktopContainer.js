import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Footer from '../common/Footer'
import 'semantic-ui-css/semantic.min.css'
import '../../styles/global.scss'

class DesktopContainer extends Component {

  render() {
    const { children } = this.props

    return (
      <div className='hide-on-mobile hide-on-tablet'>        

        {children}

        <Footer />
      </div>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer