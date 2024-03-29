import React from "react"

function Blog({ blog }) {
  const cupsOfCoffee = () => {
    let amountOfCoffees = ""
    for (let i = 0; i < blog.timeToRead; i++) {
      amountOfCoffees += "☕ "
    }
    return amountOfCoffees
  }
  return (
    <div className="item mb-5">
      <div className="media">
        <img
          className="mr-3 img-fluid post-thumb d-none d-md-flex"
          src={blog.frontmatter.cover}
          alt={blog.frontmatter.title}
        />
        <div className="media-body">
          <h3 className="title mb-1">
            <a href={blog.frontmatter.slug}>{blog.frontmatter.title}</a>
          </h3>
          <div className="meta mb-1">
            <span className="date">{blog.frontmatter.date}</span>
            <span className="time">{cupsOfCoffee()} min read</span>
            <span className="comment">
              <a href="/">8 comments</a>
            </span>
          </div>
          <div className="intro">{blog.excerpt}</div>
          <a className="more-link" href={blog.frontmatter.slug}>
            Read more &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blog
