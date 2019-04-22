import React from 'react'
import ResponsiveContainer from '../components/containers/ResponsiveContainer'
import SamplePageHeader from '../components/headers/page-headers/SamplePageHeader'
import SEO from '../components/SEO/SEO' // Options for SEO: title='String', description='String', image={imageData}, article={bool}
import OneColumnForPages from '../components/layouts/OneColumnForPages'

export default () => (
  <ResponsiveContainer>
    <SEO 
      title='Sample Page' 
      description='Just another sample page' 
      article={false} 
    />

    <SamplePageHeader />
    <OneColumnForPages />
  </ResponsiveContainer>
)