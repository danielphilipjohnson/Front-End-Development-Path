import React from "react";
import ReactMarkdown from "react-markdown";

const DisplayContainer = (props) => {
  return (
    <div className="created-blog">
      <h1>{props.title}</h1>
      <ReactMarkdown>{props.newText}</ReactMarkdown>
    </div>
  );
};

export default DisplayContainer;
