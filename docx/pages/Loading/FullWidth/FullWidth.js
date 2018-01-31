import React from "react";
import Button from "antd/lib/button";
import FullWidthLoading from "../../../../component/FullWidthLoading";

const fullWidth = props => {
  return (
    <div>
      <h2> Loader type: Spin, Dotted, Rounded, Spinner</h2>
      <h2> Loader scheme: -dark</h2>

      <div className="code">
        <span className="_text-crimson">
          {' import '} 
        </span>

        <span className="_text-sky">
          {' FullWidthLoading '} 
        </span>

        <span className="_text-crimson">
          {' from '} 
        </span>

        <span className="_text-crimson">
          {" 'test_ui/lib/FullWidthLoading' "}
        </span>

        <div className="_spacer" />

        <span className="_text-crimson">{`<FullWidthLoading `}</span>

        <div className="_margin-left">          
          <h4 className="_text-jade">
            type="dotted"
          </h4>

          <h4 className="_text-jade">
            scheme="-dark"
          </h4>
        </div>

        <span className="_text-crimson"> {`/>`} </span>
      </div>

      <div className="loading-wrapper">
        <FullWidthLoading
          type="Spin"
        />
      </div>

      <div className="loading-wrapper">
        <FullWidthLoading
          type="Dotted"
        />
      </div>

      <div className="loading-wrapper">
        <FullWidthLoading
          type="Rounded"
        />
      </div>

      <div className="loading-wrapper">
        <FullWidthLoading
          type="Spinner"
        />
      </div>

      <div className="loading-wrapper">
        <FullWidthLoading
          type="Spin"
          scheme="-dark"
        />
      </div>

      <div className="loading-wrapper">
        <FullWidthLoading
          type="Dotted"
          scheme="-dark"
        />
      </div>

      <div className="loading-wrapper">
        <FullWidthLoading
          type="Rounded"
          scheme="-dark"
        />
      </div>
    </div>
  );
};

export default fullWidth;
