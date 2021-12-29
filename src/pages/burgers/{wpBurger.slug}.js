import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {
  header,
  headerInfo,
  headerPicture,
  burgerName,
  burgerSizes,
  burgerDescription,
  burgerInfo,
  burgerPictures,
  burgerPicture,
} from "../../page.module.css"


const BurgerPage = ({
  data: { wpBurger:
    { burgerFields: burger,
      sizes: { nodes: sizes } } }
}) => {
  const image = getImage(burger.burgerPicture.localFile)
  const picture1 = getImage(burger.pictures.picture1.localFile)
  const picture2 = getImage(burger.pictures.picture2.localFile)
  const picture3 = getImage(burger.pictures.picture3.localFile)

  return (
    <Layout pageTitle="Burger Template">
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={burgerName}>{burger.name}</h1>
          <div className={burgerSizes}>
            {sizes.map((size, i) => (
              <span key={i}>
                {size.name} {i + 1 < size.length && "- "}
              </span>
            ))}
          </div>
          <br />

          <div className={burgerDescription} dangerouslySetInnerHTML={{ __html: burger.description }} />
          <p> <span className={burgerInfo} >Origin: </span>  {burger.origin}</p>
          <p> <span className={burgerInfo} >Buns: </span>  {burger.buns}</p>
          <p> <span className={burgerInfo} >Price: </span>  {burger.price}</p>
          <p> <span className={burgerInfo} >sides:  </span> {burger.sides}</p>
          <br />
          <p> <span className={burgerInfo} >ingredients: </span>  <br /> {burger.ingredients}</p>
        </div>
        <GatsbyImage className={headerPicture} image={image} alt={burger.burgerPicture.altText} />
      </div>

      <div className={burgerPictures}>
        <GatsbyImage className={burgerPicture} image={picture1} alt={burger.pictures.picture1.altText} />
        <GatsbyImage className={burgerPicture} image={picture2} alt={burger.pictures.picture2.altText} />
        <GatsbyImage className={burgerPicture} image={picture3} alt={burger.pictures.picture3.altText} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  wpBurger(id: {eq: $id}) {
    burgerFields {
      name
      description
      origin
      ingredients
      buns
      price
      sides
      burgerPicture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, height: 400)
          }
        }
        altText
      }
      pictures {
        picture1 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture3 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    sizes {
      nodes {
        name
      }
    }
  }
}
`

export default BurgerPage