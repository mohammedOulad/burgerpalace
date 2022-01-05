import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Burger from '../../components/burger'
import { banner, section, title, burgers, description } from "../../page.module.css"

const BurgersPage = ({
  data: {
    allWpBurger: { edges: burgersInfo },
    wpPage: { burgersPageFields },
  } }) => {
  const image = getImage(burgersPageFields.headerBurgers.picture.localFile)
  return (
    <Layout pageTitle="burger palace">
      <GatsbyImage
        className={banner}
        image={image}
        alt={burgersPageFields.headerBurgers.picture.altText}
      />
      <div >
        <h2 className={title} >{burgersPageFields.headerBurgers.title}</h2>
        <div

          dangerouslySetInnerHTML={{
            __html: burgersPageFields.headerBurgers.description,
          }}
        />
        <div className={burgers}>
          {burgersInfo.map(({ node: burger }) => (
            <div>
              <h3>{burger.slug.replace("-", " ")}</h3>
              <Burger key={burger.id} slug={burger.slug} burger={burger} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "burgers"}) {
    burgersPageFields {
      headerBurgers {
        description
        title
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
  allWpBurger {
    edges {
      node {
        burgerFields {
          name
          ingredients
          description
          buns
          burgerPicture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
        id
        slug
      }
    }
  }
}

`

export default BurgersPage