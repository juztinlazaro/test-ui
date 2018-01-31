import React from "react";
import Spin from "antd/lib/spin";
import Alert from "antd/lib/alert";

const FullWidthLoading = props => {
  const wrapperClass = `FullWidthLoading ${props.scheme}`;
  return (
    <section className={wrapperClass}>
      {
        props.type === "Spin" && <Spin size="large" />
      }

      {
        props.type === 'Dotted' && <div className="dotted-loader" />
      }

      {
        props.type === 'Rounded' && <div className="rounded-loader" />
      }

      {
        props.type === 'Spinner' && <div className="spinner-loader" />
      }
    </section>
  );
};

export default FullWidthLoading;
