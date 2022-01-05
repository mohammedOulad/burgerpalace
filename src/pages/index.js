import * as React from "react"
import Layout from "../components/layout"
import Burger from "../components/burger"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  burgers,
  featuredBurgersStyle
} from "../page.module.css"

const IndexPage = ({
  data: {
    wpPage: { homePageFields },
  },
}) => {
  const image = getImage(homePageFields.headerHome.picture.localFile)

  return (
    <Layout>
      <h1 className={headerTitle}>{homePageFields.headerHome.title}</h1>
      <div className={header}>
        <div className={headerInfo}>

          <div
            dangerouslySetInnerHTML={{
              __html: homePageFields.headerHome.description,
            }}
          />
        </div>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homePageFields.headerHome.picture.altText}
          />
        </div>
      </div>

      <div className={featuredBurgersStyle}>
        <h2 >{homePageFields.featuredBurgers.title}</h2>
        <p>{homePageFields.featuredBurgers.description}</p>
        <div className={burgers}>
          {homePageFields.featuredBurgers.burgers.map(burger => (
            <div>
              <h3>{burger.slug.replace("-", " ")}</h3>
              <Burger slug={`burgers/${burger.slug}`} key={burger.id} burger={burger} />
            </div>
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