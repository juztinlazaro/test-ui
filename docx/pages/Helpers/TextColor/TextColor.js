import React from "react";
import Code from "../../../utils/Code/Code";

const TextColor = () => {
  return (
    <div>
      <div className="_spacer">
        <h2 className="-text-primay"> Text color </h2>
        <h4 className="_text-jade">
          ._text-primary ._text-jade ._text-crimson ._text-pumpkin ._text-sky
        </h4>

        <h3 className="_text-primary">Primary Color</h3>

        <Code element="h4" cssClassName="_text-primary">
          Primary text Color
        </Code>
      </div>

      <div className="_spacer">
        <h3 className="_text-jade">Jade Color</h3>

        <Code element="h4" cssClassName="_text-jade">
          Jade text Color
        </Code>
      </div>

      <div className="_spacer">
        <h3 className="_text-crimson">Crimson Color</h3>

        <Code element="h4" cssClassName="_text-crimson">
          Crimson text Color
        </Code>
      </div>

      <div className="_spacer">
        <h3 className="_text-pumpkin">Pumpkin Color</h3>

        <Code element="h4" cssClassName="_text-pumpkin">
          Pumpkin text Color
        </Code>
      </div>

      <div className="_spacer">
        <h3 className="_text-sky">Sky Color</h3>

        <Code element="h4" cssClassName="_text-sky">
          Sky text Color
        </Code>
      </div>
    </div>
  );
};

export default TextColor;
