import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscribe from "../components/Subscribe/subscribe"
import Blogs from "../components/Blogs/blogs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Subscribe />
    <Blogs />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
