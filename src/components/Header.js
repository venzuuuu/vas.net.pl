import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Footer from './Footer'

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <Img fixed={data.avatar.childImageSharp.fixed} />
        </a>
        <h1>
          <strong>Value Added Service</strong>
        </h1>
      </div>
      <Footer />
    </header>
  )
}

export default Header
