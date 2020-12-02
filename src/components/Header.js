import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Footer from './Footer'

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 350, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
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
      </div>
      <Footer />
    </header>
  )
}

export default Header
