import React from "react";
import ReactMarkdown from "react-markdown";

const DisplayContainer = ({ title, newText }) => {
  return (
    <div className="created-blog">
      <h1>{title}</h1>
      <ReactMarkdown>{newText}</ReactMarkdown>
    </div>
  );
};

export default DisplayContainer;
