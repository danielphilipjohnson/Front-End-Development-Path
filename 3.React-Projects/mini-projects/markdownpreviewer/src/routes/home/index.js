import React from "react";

import Layout from "../../components/layout/index";

import BlogType from "../../components/blog/form/index";

import MarkdownContainer from "../../components/markdown/index";

import BlogPost from "../../components/blog/post/index";

const index = () => {
  return (
    <>
      <Layout>
        <BlogType />

        <div className="posts d-flex flex-column">
          <MarkdownContainer />
          <BlogPost />
        </div>
      </Layout>
    </>
  );
};

export default index;
