import React, { useState, useEffect } from "react";

import blogData from "./data/blogs";

import Layout from "./components/layout/index";

import MarkdownContainer from "./components/Markdown/MarkdownContainer";

import Navbar from "./components/sitewide/Navbar";

import BlogType from "./components/Blog/BlogType";
import BlogPost from "./components/Blog/BlogPost";

import "./App.css";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(blogData);
  }, []);

  const BlogItems = blogs.map((blog) => (
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
    <>
      <Navbar />

      <Layout>
        <BlogType />

        <div className="posts d-flex flex-row flex-wrap">
          <MarkdownContainer />

          {BlogItems}
        </div>
      </Layout>
    </>
  );
};

export default App;
