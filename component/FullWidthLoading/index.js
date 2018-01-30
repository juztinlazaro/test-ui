import React from "react";
import Spin from "antd/lib/spin";
import Alert from "antd/lib/alert";

const FullWidthLoading = props => {
  return (
    <section className="FullWidthLoading">
      <Spin
        delay={props.delay}
        indicator={props.indicator}
        size={props.size}
        spinning={props.spinning}
        tip={props.tip}
        wrapperClassName={props.wrapperClassName}
      >
        {props.children}
      </Spin>
    </section>
  );
};

export default FullWidthLoading;
