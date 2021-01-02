import React from "react";
import MarkdownPreviewer from "./MarkdownPreviewer";
import './MarkdownContainer.css';

export default function MarkdownContainer() {
  return (
    <div className="media">
      <div className="d-none d-lg-flex mr-4 profile-box">
        <img
          className=" rounded"
          src="https://placeimg.com/450/450/any"
          alt="User Profile"
        />
      </div>

      <div className="media-body">
        <div className="card card-blog">
          <div className="card-header d-flex flex-row justify-content-between align-items-center">
            <div className="post-user pr-3">
              <p className="m-0">
                Here's a blog: <span>USERNAME</span>
              </p>
            </div>
            <div className="share">
            
              <a href="#">Follow</a>
            </div>
          </div>
          <div className="post-content">
            <MarkdownPreviewer />
          </div>
          <div className="card-block">
            <p className="card-text text-muted post-tags"># example tags</p>
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
