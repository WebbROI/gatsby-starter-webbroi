import React from 'react'
import ResponsiveContainer from '../components/containers/ResponsiveContainer'
import NotFoundPageHeader from '../components/headers/page-headers/NotFoundPageHeader'
import SEO from '../components/SEO/SEO' // Options for SEO: title='String', description='String', image={imageData}, article={bool}

export default () => (
  <ResponsiveContainer>
    <SEO 
      title='Page Not Found' 
      description='The requested document was not found.' 
      article={false} 
    />
    
    <NotFoundPageHeader />
  </ResponsiveContainer>
)