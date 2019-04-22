import React from 'react'
import PropTypes from 'prop-types'

const FullHeaderColorBg = ({ children }) => (
  <div className='full-header-color-bg'>
    {children}
  </div>
)

FullHeaderColorBg.propTypes = {
  children: PropTypes.node
}

export default FullHeaderColorBg