import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecentBlogs from "../components/blogs/recent-blogs"

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <RecentBlogs />
    </Layout>
  )
}

export default IndexPage
