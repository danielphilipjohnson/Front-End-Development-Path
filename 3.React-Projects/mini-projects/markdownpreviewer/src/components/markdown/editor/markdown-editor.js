import React from "react";
import "./markdown-editor.css";

const MarkDownEditor = ({ text, changeMarkup, changeTitle }) => {
  const updateMarkup = (e) => {
    changeMarkup(e.target.value);
  };

  const upDateTitle = (e) => {
    changeTitle(e.target.value);
  };

  return (
    <div
      className="modal fade"
      id="myModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="d-flex justify-content-center align-items-baseline mt-3">
        <img
          className="mr-3 user-photo rounded"
          src="https://via.placeholder.com/150"
          width="50"
          height="50"
          alt="user profile"
        />
        <div className="modal-dialog m-0 align-self-center" role="document">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <p className="modal-title" id="exampleModalLabel">
                UserName
              </p>
              <i className="fa fa-cog" aria-hidden="true"></i>
            </div>
            <div className="modal-body d-flex flex-column pt-0">
              <label htmlFor="blog-title">Blog title</label>

              <input
                id="blog-title"
                className="blog-title"
                placeholder="Title"
                type="text"
                onChange={upDateTitle}
              />
              <textarea
                className="blog-content"
                value={text}
                onChange={updateMarkup}
              />
            </div>
            <div className="modal-footer d-flex flex-row justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkDownEditor;
