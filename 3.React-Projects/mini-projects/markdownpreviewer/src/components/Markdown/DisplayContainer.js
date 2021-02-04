import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class DisplayContainer extends Component {
  render() {
    return (
      <div className="created-blog">
        <h1>{this.props.title}</h1>
        <ReactMarkdown>{this.props.newText}</ReactMarkdown>
      </div>
    );
  }
}

export default DisplayContainer;
