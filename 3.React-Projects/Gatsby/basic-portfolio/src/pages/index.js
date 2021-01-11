import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecentBlogs from "../components/blogs/recent-blogs"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <RecentBlogs />
    </Layout>
  )
}

export default IndexPage
