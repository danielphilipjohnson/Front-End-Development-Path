import React, { Component } from "react";
import DisplayContainer from "./display/DisplayContainer";
import MarkDownEditor from "./editor/markdown-editor";
//var marked = require('marked');

class MarkdownPreviewer extends Component {
  constructor() {
    super();
    this.state = {
      convertedMarkdownText:
        "* apples \n * banana \n ![placeholder](https://placeimg.com/450/250/any)",
      title: "Blog Title",
    };
    this.changeMarkup = this.changeMarkup.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeMarkup(modifiedText) {
    this.setState({
      convertedMarkdownText: modifiedText,
    });
  }
  changeTitle(newTitle) {
    this.setState({
      title: newTitle,
    });
  }

  render() {
    return (
      <>
        <MarkDownEditor
          text={this.state.convertedMarkdownText}
          changeMarkup={this.changeMarkup}
          changeTitle={this.changeTitle}
        />
        <DisplayContainer
          newText={this.state.convertedMarkdownText}
          title={this.state.title}
        />
      </>
    );
  }
}

export default MarkdownPreviewer;
