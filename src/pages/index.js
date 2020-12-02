import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const HomeIndex = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Drodzy Państwo,</h2>
          </header>
          <p>
            serdecznie witamy na naszej stronie przedstawiającej naszą firmę z
            dziedziny doradztwa fotowoltaicznego. Z sukcesem działamy w branży
            odnawialnych źródeł energii od 2017 roku, a moc zrealizowanych przez
            nas instalacji fotowoltaicznych przekracza 4 MW (4000 kW).
            Współpracujemy z najlepszymi firmami fotowoltaicznymi dzięki czemu
            jesteśmy w stanie pozyskać zawsze najlepszą wycenę dla konkretnej
            firmy w danej lokalizacji. Instalacja fotowoltaiczna daje możliwości
            poczynienia znacznych oszczędności na energii elektrycznej. Możemy
            zaproponować Państwu wycenę takiej instalacji, która pozwoli
            znacznie obniżyć rachunki za prąd. Podwyżki cen prądu pokazują, że
            należy szukać alternatywnych sposobów pozyskiwania prądu, a firmy
            które zakładają panele fotowoltaiczne nie muszą zwiększać cen swoich
            produktów przez co są na rynku bardziej konkurencyjne. Przedstawimy
            Państwu wszystkie korzyści z założenia własnej elektrowni
            słonecznej. Wycena jest przedstawiana zawsze z konkretnej firmy
            fotowoltaicznej po wstępnej analizie najkorzystniejszej
            opłacalności.
          </p>
          <p>
            <Img fixed={data.phone.childImageSharp.fixed} />
          </p>
          <p>
            <Img fixed={data.signature.childImageSharp.fixed} />
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const query = graphql`
  query IndexQuery {
    signature: file(relativePath: { eq: "signature.jpg" }) {
      childImageSharp {
        fixed(width: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    phone: file(relativePath: { eq: "phone.jpg" }) {
      childImageSharp {
        fixed(width: 149, quality: 99) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
