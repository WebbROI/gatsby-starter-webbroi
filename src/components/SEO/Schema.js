import React from 'react'
import Helmet from 'react-helmet'

const Schema = ({
  image = null,
}) => (
  <Helmet>
    <script type="application/ld+json">
      {`
        {
          "@context" : "http://schema.org",
          "@type" : "LocalBusiness",
          "name" : "Project Name",
          "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
          "telephone" : "123-456-7890",
          "email" : "jon@snow.com",
          "address" : {
            "@type" : "PostalAddress",
            "streetAddress" : "1234 Acme Ave., Suite 101",
            "addressLocality" : "Irvine",
            "addressRegion" : "CA",
            "postalCode" : "92606"
          },
          "image" : "${image}",
          "priceRange" : "$$$"
        }
      `}
    </script>
  </Helmet>
)

export default Schema