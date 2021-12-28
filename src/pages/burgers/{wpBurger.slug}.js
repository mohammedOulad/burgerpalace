import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

// ...

const BurgerPage = ({ data: { wpBurger: { burgerFields: burger } } }) => {
  const image = getImage(burger.burgerPicture.localFile)

  return (
    <Layout pageTitle="Burger Template">
      <div>
        <GatsbyImage image={image} alt={burger.burgerPicture.altText} />
        <h1>{burger.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: burger.description }} />
        <p>Origin: {burger.origin}</p>
        <p>Buns: {burger.buns}</p>
        <p>Price: {burger.price}</p>
        <p>sides: {burger.sides}</p>
        <p>ingredients: {burger.ingredients}</p>
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
      }
    }
  }
`

export default BurgerPage