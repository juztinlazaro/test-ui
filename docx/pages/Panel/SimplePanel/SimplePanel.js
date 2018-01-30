import React from "react";
import Panel from "COMPONENT/Panel";

const SimplePanel = () => {
  return (
    <div>
      <Panel />

      <div className="_spacer-md" />
      <h3> Usage </h3>

      <div className="code">
        <span className="_text-crimson">{`<section `}</span>
        <span className="_text-sky">{`className`}</span>
        <span className="_text-crimson">{`=`}</span>
        <span className="_text-pumpkin">{`"panel"`}</span>
        <span className="_text-crimson">{`>`}</span>

        <div className="_margin-left">
          <span className="_text-crimson">{`<div `}</span>
          <span className="_text-sky">{`className`}</span>
          <span className="_text-crimson">{`=`}</span>
          <span className="_text-pumpkin">{`"header"`}</span>
          <span className="_text-crimson">{`>`}</span>
          <br />
          <span className="_margin-left">header</span>
          <br />
          <span className="_text-crimson">{`</div>`}</span>
        </div>
        <br />

        <div className="_margin-left">
          <span className="_text-crimson">{`<div `}</span>
          <span className="_text-sky">{`className`}</span>
          <span className="_text-crimson">{`=`}</span>
          <span className="_text-pumpkin">{`"body"`}</span>
          <span className="_text-crimson">{`>`}</span>
          <br />
          <span className="_margin-left">body</span>
          <br />
          <span className="_text-crimson">{`</div>`}</span>
        </div>
        <br />

        <div className="_margin-left">
          <span className="_text-crimson">{`<div `}</span>
          <span className="_text-sky">{`className`}</span>
          <span className="_text-crimson">{`=`}</span>
          <span className="_text-pumpkin">{`"footer"`}</span>
          <span className="_text-crimson">{`>`}</span>
          <br />
          <span className="_margin-left">footer</span>
          <br />
          <span className="_text-crimson">{`</div>`}</span>
        </div>

        <span className="_text-crimson">{`</section>`}</span>
      </div>
    </div>
  );
};

export default SimplePanel;
