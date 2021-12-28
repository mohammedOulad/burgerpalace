import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const BurgerPage = ({data: {wpBurger: {burgerFields: burger}}}) => {
  return (
    <Layout pageTitle="Artiesten Template">
    <div>
      <h1>{burger.name}</h1>
      <div dangerouslySetInnerHTML={{__html: burger.description}} />
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
      }
    }
  }
`

export default BurgerPage