import React, { Component } from "react";

import blogData from "./data/blogs";

import MarkdownContainer from "./components/Markdown/MarkdownContainer";

import Navbar from "./components/sitewide/Navbar";

import BlogType from "./components/Blog/BlogType";
import BlogPost from "./components/Blog/BlogPost";

import "./App.css";

class App extends Component {
  state = {
    blogs: blogData,
  };

  render() {
    const BlogItems = this.state.blogs.map((blog) => (
      <BlogPost
        id={blog.id}
        username={blog.username}
        title={blog.title}
        body={blog.body}
        profileUrl={blog.profileUrl}
        image={blog.url}
      />
    ));

    return (
      <div>
        <Navbar />

        <div className="container">
          <BlogType />

          <div className="posts d-flex flex-row flex-wrap">
            <MarkdownContainer />

            {BlogItems}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
