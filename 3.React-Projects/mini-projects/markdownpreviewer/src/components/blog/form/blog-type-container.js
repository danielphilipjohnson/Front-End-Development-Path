import React from "react";
import "./blog-type.css";

const BlogType = () => {
  return (
    <div className="d-flex flex-row modal-bar mt-4">
      <div className="media d-none d-lg-flex">
        <div className="d-flex mr-4 profile-box">
          <img
            className=" rounded"
            src="https://placeimg.com/450/450/any"
            alt="bot profile"
          />
        </div>

        <div className="media-body">
          <nav className="d-flex flex-row" aria-label="Page navigation example">
            <ul className="pagination">
              <li
                className="page-item"
                data-toggle="modal"
                data-target="#myModal"
              >
                <p className="page-link">
                  <i className="fa fa-font text" aria-hidden="true"></i>
                  <p>Text</p>
                </p>
              </li>
              <li className="page-item">
                <p className="page-link">
                  <i className="fa fa-camera photo" aria-hidden="true"></i>
                  <p>Photo</p>
                </p>
              </li>
              <li className="page-item">
                <p className="page-link">
                  <i className="fa fa-quote-left quote" aria-hidden="true"></i>
                  <p>Quote</p>
                </p>
              </li>
              <li className="page-item">
                <p className="page-link">
                  <i className="fa fa-link link" aria-hidden="true"></i>
                  <p>Link</p>
                </p>
              </li>
              <li className="page-item">
                <p className="page-link">
                  <i className="fa fa-comments chat" aria-hidden="true"></i>
                  <p>Chat</p>
                </p>
              </li>
              <li className="page-item">
                <p className="page-link">
                  <i className="fa fa-music audio" aria-hidden="true"></i>
                  <p>Audio</p>
                </p>
              </li>
              <li className="page-item">
                <p className="page-link">
                  <i
                    className="fa fa-video-camera video"
                    aria-hidden="true"
                  ></i>
                  <p>Video</p>
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlogType;