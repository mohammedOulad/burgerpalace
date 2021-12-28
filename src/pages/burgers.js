import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BurgersPage = ({data: {allWpBurger: {edges}}}) => {
    return (
      <Layout pageTitle="Artists of Inghelbrecht Agency">
        {edges.map((item) => {
          const artist = item.node.burgerFields;
          return <p key={item.node.id}>{artist.name} {artist.description}</p>
        })}
      </Layout>
    )
  }

export const query = graphql`
query {
    allWpBurger {
      edges {
        node {
          id
          burgerFields {
            name
            description
          }
        }
      }
    }
  }

`

export default BurgersPage