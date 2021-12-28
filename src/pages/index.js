import * as React from "react"
import Layout from "../components/layout"
import Burger from "../components/burger"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
  burgers
} from "../page.module.css"

const IndexPage = ({
  data: {
    wpPage: { homePageFields },
  },
}) => {
  const image = getImage(homePageFields.headerHome.picture.localFile)

  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePageFields.headerHome.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homePageFields.headerHome.description,
            }}
          />
          <a className={CTA} target="__blank" href={homePageFields.callToAction.link}>
            {homePageFields.callToAction.linkText}
          </a>
        </div>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homePageFields.headerHome.picture.altText}
          />
        </div>
      </div>

      <div className={section}>
        <h2 className={subtitle}>{homePageFields.featuredBurgers.title}</h2>
        <p>{homePageFields.featuredBurgers.description}</p>
        <div className={burgers}>
          {homePageFields.featuredBurgers.burgers.map(burger => (
            <Burger slug={`burgers/${burger.slug}`} key={burger.id} burger={burger} />
          ))}
        </div>
      </div>


    </Layout>
  )

}

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePageFields {
      headerHome {
        description
        title
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 450, width: 300)
            }
          }
        }
      }
      callToAction {
        link
        linkText
      }
      featuredBurgers {
        burgers {
          ... on WpBurger {
            id
            slug
            burgerFields {
              name
              burgerPicture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, height: 400)
                  }
                }
              }
            }
          }
        }
        title
        description
      }
    }
  }
}
`

export default IndexPage