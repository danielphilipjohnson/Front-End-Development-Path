import React from "react"
import Blog from "./blog"

const dummyData = {
  image: "https://source.unsplash.com/random",
  title: "Why Every Developer Should Have A Blog",
  datePublish: "Published 2 days ago",
  lengthToRead: 5,
  body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Donec quam felis, ultricies...`,
  link: "#",
}

const dummyDatablogs = [
  {
    image: "https://source.unsplash.com/random",
    title: "Why Every Developer Should Have A Blog",
    datePublish: "Published 2 days ago",
    lengthToRead: 5,
    body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Donec quam felis, ultricies...`,
    link: "#",
  },
  {
    image: "https://source.unsplash.com/random",
    title: "A Guide to Becoming a Full-Stack Developer",
    datePublish: "Published 2 days ago",
    lengthToRead: 5,
    body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Donec quam felis, ultricies...`,
    link: "#",
  },
  {
    image: "https://source.unsplash.com/random",
    title: "High Performance JavaScript",
    datePublish: "Published 2 days ago",
    lengthToRead: 5,
    body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Donec quam felis, ultricies...`,
    link: "#",
  },
  {
    image: "https://source.unsplash.com/random",
    title: "Top 5 JavaScript Frameworks",
    datePublish: "Published 2 days ago",
    lengthToRead: 5,
    body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Donec quam felis, ultricies...`,
    link: "#",
  },
  {
    image: "https://source.unsplash.com/random",
    title: "Learn React in 24 Hours",
    datePublish: "Published 2 days ago",
    lengthToRead: 5,
    body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Donec quam felis, ultricies...`,
    link: "#",
  },
  {
    image: "https://source.unsplash.com/random",
    title: "Top 5 JavaScript Frameworks",
    datePublish: "Published 2 days ago",
    lengthToRead: 5,
    body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Donec quam felis, ultricies...`,
    link: "#",
  },
  {
    image: "https://source.unsplash.com/random",
    title: "About Remote Working",
    datePublish: "Published 2 days ago",
    lengthToRead: 5,
    body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Donec quam felis, ultricies...`,
    link: "#",
  },
]

function Blogs() {
  return (
    <section className="blog-list px-3 py-5 p-md-5">
      <div className="container">
        {dummyDatablogs.map(blog => {
          return <Blog blog={blog} />
        })}

        <nav className="blog-nav nav nav-justified my-5">
          <a
            className="nav-link-prev nav-item nav-link d-none rounded-left"
            href="#"
          >
            Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i>
          </a>
          <a
            className="nav-link-next nav-item nav-link rounded"
            href="blog-list.html"
          >
            Next<i className="arrow-next fas fa-long-arrow-alt-right"></i>
          </a>
        </nav>
      </div>
    </section>
  )
}

export default Blogs
