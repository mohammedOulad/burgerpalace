import React from "react"
import {
  wrapper,
  title,
  socials,
  instagram,
  twitter,
} from "./footer.module.css"

const Footer = ({ siteTitle, companyInfo }) => {
    return (
      <div className={wrapper}>
        <div>
          <p className={title}>{siteTitle}</p>
          <p>Codobi</p>
          <p>All rights reserved.</p>
        </div>
        <div>
          <p>{`${companyInfo.address}, ${companyInfo.postcode} ${companyInfo.city}`}</p>
          <div className={socials}>
            Follow us:
            <a
              className={instagram}
              target="__blank"
              href={companyInfo.socials.instagram}
            />
            <a
              className={twitter}
              target="__blank"
              href={companyInfo.socials.twitter}
            />
          </div>
        </div>
      </div>
    )
  }

export default Footer