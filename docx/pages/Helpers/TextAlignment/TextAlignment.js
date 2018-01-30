import React from "react";
import Code from "../../../utils/Code/Code";

const TextAlignment = () => {
  return (
    <div>
      <h2 className="-text-primay"> Text Alignment </h2>

      <h4 className="_text-jade">._text-center ._text-right ._text-left</h4>

      <h2 className="_text-center _content-bg"> Text center Yolo </h2>
      <Code element="h2" cssClassName="_text-center">
        Im a text center
      </Code>

      <div className="_spacer-md" />

      <h2 className="_text-right _content-bg"> Text right Yolo </h2>
      <Code element="h2" cssClassName="_text-right">
        Im a text right
      </Code>

      <div className="_spacer-md" />

      <h2 className="_text-left _content-bg"> Text left Yolo </h2>
      <Code element="h2" cssClassName="_text-left">
        Im a text left
      </Code>
    </div>
  );
};

export default TextAlignment;
