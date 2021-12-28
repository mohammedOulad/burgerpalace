import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to Inghelbrecht Agency!</h1>
      <Link to="/about">About page</Link>
      <p>Lorem ipsum</p>
    </main>
  )
}

export default IndexPage