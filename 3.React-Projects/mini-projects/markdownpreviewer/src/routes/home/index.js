import React from "react";

import Layout from "../../components/layout/index";

import BlogType from "../../components/Blog/form/index";

import MarkdownContainer from "../../components/markdown/index";

import BlogPost from "../../components/Blog/post/index";

const index = () => {
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

export default index;
