import React, { useState } from "react";
import DisplayContainer from "../display/index";
import MarkDownEditor from "../editor/index";

const MarkdownPreviewer = () => {
  const [convertedMarkdownText, setConvertedMarkdownText] = useState(
    "* apples \n * banana \n ![placeholder](https://placeimg.com/450/250/any)"
  );

  const [title, setTitle] = useState("Blog Title");

  const changeMarkup = (modifiedText) => {
    setConvertedMarkdownText(modifiedText);
  };

  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <>
      <MarkDownEditor
        text={convertedMarkdownText}
        changeMarkup={changeMarkup}
        changeTitle={changeTitle}
      />
      <DisplayContainer newText={convertedMarkdownText} title={title} />
    </>
  );
};

export default MarkdownPreviewer;
