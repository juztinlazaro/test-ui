import React from "react";
import Buttons from "antd/lib/button";
const Button = props => {
  return (
    <div>
      {" "}
      <Buttons> {props.child} </Buttons>{" "}
    </div>
  );
};

export default Button;
