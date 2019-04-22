import React from 'react'
import ResponsiveContainer from '../components/containers/ResponsiveContainer'
import NoBgPageHeader from '../components/headers/page-headers/NoBgPageHeader'
import ContactForm from '../components/forms/ContactForm'
import SEO from '../components/SEO/SEO' // Options for SEO: title='String', description='String', image={imageData}, article={bool}
import {
  Segment,
  Grid,
  Header,
} from 'semantic-ui-react'

export default () => (
  <ResponsiveContainer>
    <SEO 
      title='Contact Us' 
      description='Send us a message.' 
      article={false} 
    />
    
    <NoBgPageHeader />

    <Segment className='one-column-segment with-color-bg' vertical>
      <Grid>
        <Grid.Column className='column width-600'>
          <Header as='h2' className='title center'>
            Contact Us
          </Header>
          
          <p className='paragraph center'>Please use the contact form below to send us your message.</p>

          <ContactForm />
        </Grid.Column>
      </Grid>
    </Segment>
  </ResponsiveContainer>
)