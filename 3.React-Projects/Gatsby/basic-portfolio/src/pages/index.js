import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Subscribe from "../components/Subscribe/subscribe"
import RecentBlogs from "../components/Blogs/recent-blogs"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <RecentBlogs />
      {/* <Subscribe /> */}
    </Layout>
  )
}

export default IndexPage
