import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Footer from './footer'
import { 
  container, 
  nav, 
  navLinks, 
  navLinkItem, 
  navLinkText, 
  siteTitle 
} from './layout.module.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      wpPage(slug: { eq: "contact-us" }) {
        contactPageFields {
          companyInformation {
            address
            city
            postcode
            socials {
              twitter
              instagram
            }
          }
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
        <header className={siteTitle}>
          {data.site.siteMetadata.title}
        </header>
        <ul className={navLinks}>
        <li>
        </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/burgers">
              Burgers
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/contact">
              contact
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        companyInfo={data.wpPage.contactPageFields.companyInformation}
      />
    </div>
  )
}

export default Layout