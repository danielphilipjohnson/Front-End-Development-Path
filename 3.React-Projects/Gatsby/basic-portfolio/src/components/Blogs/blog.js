import React from "react"

function Blog({ blog }) {
  const { image, title, datePublish, lengthToRead, body, link } = blog
  return (
    <div className="item mb-5">
      <div className="media">
        <img
          className="mr-3 img-fluid post-thumb d-none d-md-flex"
          src={image}
          alt="image"
        />
        <div className="media-body">
          <h3 className="title mb-1">
            <a href="blog-post.html">{title}</a>
          </h3>
          <div className="meta mb-1">
            <span className="date">{datePublish}</span>
            <span className="time">{lengthToRead} min read</span>
            <span className="comment">
              <a href="#">8 comments</a>
            </span>
          </div>
          <div className="intro">{body}</div>
          <a className="more-link" href={link}>
            Read more &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blog
