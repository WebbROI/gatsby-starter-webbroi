import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import {
  Button,
  Header,
} from 'semantic-ui-react'

const FullHeaderText = ({ title, subTitle, withButton, buttonText, className, linkTo }) => (
  <div className={className ? className : 'full-header-text-container'}>
    <Header
      as='h1'
      className='title'
      content={title ? title : 'Your Title Here'}
      inverted
    />
    <Header
      as='h2'
      className='subtitle'
      content={subTitle ? subTitle : 'Your subtitle here.'}
      inverted
    />
    {withButton
      ?
        <Button primary size='huge' as={Link} to={linkTo}>
          {buttonText ? buttonText : 'Button Name Here'}
        </Button>
      :
        null
    }
  </div>
)

FullHeaderText.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default FullHeaderText