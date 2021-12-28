import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Burger from '../../components/burger'
import {
  hero,
  section,
  subtitle,
  burgers,
  description,
} from "../../page.module.css"

const BurgersPage = ({
  data: {
    allWpBurger: { edges: burgersInfo },
    wpPage: { burgersPageFields },
  } }) => {
  const image = getImage(burgersPageFields.headerBurgers.picture.localFile)
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      <GatsbyImage
        className={hero}
        image={image}
        alt={burgersPageFields.headerBurgers.picture.altText}
      />
      <div className={section}>
        <h2 className={subtitle}>{burgersPageFields.headerBurgers.title}</h2>
        <div
        className={description}
          dangerouslySetInnerHTML={{
            __html: burgersPageFields.headerBurgers.description,
          }}
        />
        <div className={burgers}>
          {burgersInfo.map(({ node: burger }) => (
            <Burger key={burger.id} slug={burger.slug} burger={burger} />
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