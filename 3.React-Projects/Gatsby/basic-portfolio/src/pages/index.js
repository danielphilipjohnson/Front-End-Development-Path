import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Subscribe from "../components/Subscribe/subscribe"
import Blogs from "../components/Blogs/blogs"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <h2>Add newest blog page</h2>
      {/* <Blogs />  we need to include newest blogs*/}
      {/* <Subscribe /> */}
    </Layout>
  )
}

export default IndexPage
