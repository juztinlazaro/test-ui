import React from "react";
import Code from "../../../utils/Code/Code";

const Spacer = () => {
  return <section className="Spacer-section">
      <h2> Spacer </h2>
      <h4>Add ._spacer to add a uniform margin-bottom to your elements</h4>
      <h4 className="_text-jade">
        ._spacer ._spacer-sm ._spacer-md ._spacer_lg
      </h4>

      <div className="_spacer _content-bg _text-snow">_spacer</div>

      <div className="_spacer-sm _content-bg _text-snow">_spacer-sm</div>

      <div className="_spacer-md _content-bg _text-snow">_spacer-md</div>

      <div className="_spacer-lg _content-bg _text-snow">_spacer-lg</div>
    </section>;
};

export default Spacer;