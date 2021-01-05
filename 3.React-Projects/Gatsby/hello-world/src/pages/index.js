import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <div style={{ color: `purple`, fontSize: `72px` }}>
      <Layout>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </Layout>
    </div>
  )
}
