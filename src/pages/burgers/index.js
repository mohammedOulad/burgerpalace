import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

// ...

const BurgersPage = ({ data: { allWpBurger: { edges } } }) => {
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      {edges.map((item) => {
        const burger = item.node.burgerFields;
        const slug = item.node.slug;
        return <Link to={`/burgers/${slug}`}>
          <p key={item.node.id}>{burger.name}</p>
        </Link>

      })}
    </Layout>
  )
}

export const query = graphql`
query {
    allWpBurger {
      edges {
        node {
          burgerFields {
            name
        }
        id
        slug
        }
      }
    }
  }

`

export default BurgersPage