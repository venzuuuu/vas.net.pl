import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = ({ data }) => {
  const siteTitle = 'Value Added Service - vas.net.pl'
  const siteDescription = 'Value Added Service'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
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
          <Img fixed={data.signature.childImageSharp.fixed} />
        </section>

        <section id="two">
          <h2>Realizacje</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Kontakt</h2>
          <p>
            Bądźmy w kontakcie. Jeżeli chcą się Państwo z nami skontakować
            prosimy o wypełnienie poniżsezgo formularza. Odpowiemy najpóźńiej
            kolejnego dnia.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Imię"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Treść wiadomości"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Wyślij do nas wiadomość" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  1234 Somewhere Rd.
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  000-000-0000
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">kontakt@vas.net.pl</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const query = graphql`
  query {
    signature: file(relativePath: { eq: "signature.jpg" }) {
      childImageSharp {
        fixed(width: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
