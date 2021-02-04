import React, { Component } from "react";


import "./BlogPost.css";
class BlogPost extends Component {
  render() {
   
    return (
     
      <div className="media">
      <div className="d-none d-lg-flex mr-4 profile-box">
        <img
          className=" rounded"
          src={this.props.profileUrl}
          alt="user profile"
        />
      </div>
      <div className="media-body">
        <div className="card card-blog">
          <div className="card-header">
            <div className="media-body d-flex">
              <img
                className="mr-3 profile-img"
                src={this.props.profileUrl}
                alt="user profile"
              />
              <div
                className="media-body d-flex
                        space-between align-items-center"
              >
                <div className="post-user pr-3">
                  <p className="m-0">{this.props.username}</p>
                </div>
                <div className="share">
                  <a href="#">Follow</a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-fluid"
            src={this.props.image}
            alt="blog post"
          />
          <div className="card-block">
            <p className="card-text text-muted post-tags p-3">{this.props.body}</p>
          </div>
          <div className="card-footer text-muted">
            <div className="float-left footer-info">17,543 Notes</div>
            <div className="float-right">
              <i
                className="fa fa-paper-plane footer-icons"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-share-square-o footer-icons"
                aria-hidden="true"
              ></i>
              <i className="fa fa-heart-o footer-icons" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
    
  }
}

export default BlogPost;
