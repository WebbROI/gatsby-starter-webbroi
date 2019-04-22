import React from 'react'
import ResponsiveContainer from '../components/containers/ResponsiveContainer'
import HomePageHeader from '../components/headers/page-headers/HomePageHeader'
import SEO from '../components/SEO/SEO' // Options for SEO: title='String', description='String', image={imageData}, article={bool}
import TwoColumns from '../components/layouts/TwoColumns'

export default () => (
  <ResponsiveContainer>
    <SEO 
      isHome 
      article={false} 
    />

    <HomePageHeader />
    <TwoColumns />
  </ResponsiveContainer>
)