import React, { Component } from "react";

import MarkdownContainer from "./components/Markdown/MarkdownContainer";

import Navbar from "./components/sitewide/Navbar";

import BlogType from "./components/Blog/BlogType";
import BlogPost from "./components/Blog/BlogPost";

import "./App.css";

class App extends Component {
  state = {
    blogs: [
      {
        id: "1",
        username: "Bret",
        url: "https://via.placeholder.com/600/92c952",
        profileUrl: "https://via.placeholder.com/150/92c952",
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        id: "2",
        username: "Antonette",
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        url: "https://via.placeholder.com/600/771796",
        profileUrl: "https://via.placeholder.com/150/771796",
        body:
          "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      },
      {
        id: "3",
        username: "Samantha",
        title: "eum et est occaecati",
        url: "https://via.placeholder.com/600/24f355",
        profileUrl: "https://via.placeholder.com/150/24f355",
        body:
          "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      },
      {
        id: "4",
        username: "Karianne",
        url: "https://via.placeholder.com/600/d32776",
        profileUrl: "https://via.placeholder.com/150/d32776",
        title: "nesciunt quas odio",
        body:
          "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      },
    ],
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
