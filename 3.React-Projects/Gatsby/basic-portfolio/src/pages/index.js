import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscribe from "../components/Subscribe/subscribe"
import Blogs from "../components/Blogs/blogs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Blogs />
    <Subscribe />
  </Layout>
)

export default IndexPage
