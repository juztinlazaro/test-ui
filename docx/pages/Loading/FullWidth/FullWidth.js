import React from "react";
import Button from "antd/lib/button";
import FullWidthLoading from "COMPONENT/FullWidthLoading";

const fullWidth = props => {
  return (
    <div>
      <div className="code">
        <span className="_text-crimson">{`<div `}</span>
        <span className="_text-sky">{`className="FullWidthLoading">`}</span>

        <div className="_margin-left">
          <span className="_text-crimson">{`<Spin`}</span>
          <br />
          <span className="_margin-left _text-jade">{` tip="Loading..."`}</span>
          <br />
          <span className="_margin-left _text-jade">{` size="large"`}</span>
          <br />
          <span className="_margin-left _text-jade">{` delay="5"`}</span>
          <br />
          <span className="_text-crimson"> /> </span>
        </div>

        <span className="_text-crimson"> {`</div>`} </span>
      </div>

      <Button type="primary" onClick={props.onLoading} ghost>
        {" "}
        loading{" "}
      </Button>

      {props.status && (
        <FullWidthLoading tip="Loading..." size="large" delay="5" />
      )}

      {props.status && (
        <Button
          type="danger"
          className="_upper-element"
          onClick={props.onUnloading}
          ghost
        >
          close
        </Button>
      )}
    </div>
  );
};

export default fullWidth;
