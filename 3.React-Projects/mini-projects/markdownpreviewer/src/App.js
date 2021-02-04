import React from "react";

import Layout from "./components/layout/index";

import BlogType from "./components/Blog/form/index";

import MarkdownContainer from "./components/Markdown/MarkdownContainer";

import BlogPost from "./components/Blog/post/index";

import "./App.css";

const App = () => {
  return (
    <>
      <Layout>
        <BlogType />

        <div className="posts d-flex flex-row flex-wrap">
          <MarkdownContainer />
          <BlogPost />
        </div>
      </Layout>
    </>
  );
};

export default App;
