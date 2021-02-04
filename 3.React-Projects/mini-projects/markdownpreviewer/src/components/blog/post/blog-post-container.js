import React, { useState, useEffect } from "react";

import BlogPost from "./blog-post";
import blogData from "../../../data/blogs";
import "./blog-post.css";

const BlogPostContainer = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(blogData);
  }, []);

  return blogs.map((blog) => (
    <BlogPost
      id={blog.id}
      key={blog.id}
      username={blog.username}
      title={blog.title}
      body={blog.body}
      profileUrl={blog.profileUrl}
      image={blog.url}
    />
  ));
};

export default BlogPostContainer;
