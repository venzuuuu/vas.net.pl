import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="tel:+48500470554" className="icon fa-phone">
            <span className="label">Telefon</span>
          </a>
        </li>
        <li>
          <a href="mailto:biuro.vas@gmail.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; VAS, Value Added Service</li>
      </ul>
    </div>
  </div>
)

export default Footer
