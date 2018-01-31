import React, { Component } from 'react';
import Icon from 'antd/lib/icon';
import Slate from '../../../../component/Slate';
import Code from "../../../utils/Code/Code";
import BlockCode from "../../../utils/BlockCode/BlockCode";


class BasicSlate extends Component {
  state = {
    type: [
      {
        name: "type",
        value: "mail"
      }
    ]
  };

  render() {
    return <section>
        <section className="code">
          <h3 className="_spacer"> Usage: </h3>

          <span className="_text-crimson"> import </span>
          <span className="_text-jade"> Slate </span>
          <span className="_text-sky"> from </span>
          <span className="_text-crimson _spacer"> 'test_ui/lib/Slate'; </span>

          <div className="_spacer" />

          <h4 className="_text-crimson">
            {' <Slate '}
          </h4>

          <div className="_margin-left">
            <h4 className="_text-sky">
              {' type="-plain" '}
            </h4>
              
            <h4 className="_text-sky">
              {' icon={<Icon className="-text-xl" type="mail" />} '}
            </h4>

            <h4 className="_text-sky">
              {' title="Slate with No Background" '}
            </h4>

            <h4 className="_text-sky">
              {' description="Use it to provide information when no dynamic content exists." '}
            </h4>
          </div>

          <h4 className="_text-crimson">
            {' /> '}
          </h4>
        </section>
        
        <Slate
          type="_spacer-md"
          icon={<Icon className="-text-xl" type="mail" />}
          title="This is a blank slate"
          description="Use it to provide information when no dynamic content exists."
        />

        <h3>
          Add the
          <span className="_text-pumpkin"> -spacious </span>
          type to your slate.
        </h3>

        <Slate
          type="-spacious _spacer-md"
          icon={<Icon className="-text-xl" type="mail" />}
          title="Slate spacious"
          description="Use it to provide information when no dynamic content exists."
        />

        <h3>
          Add the
          <span className="_text-pumpkin"> -plain </span>
          type to your slate.
        </h3>

        <Slate
          type="-plain _spacer-md"
          icon={<Icon className="-text-xl" type="mail" />}
          title="Slate with No Background"
          description="Use it to provide information when no dynamic content exists."
        />
      </section>;
  }
}

export default BasicSlate;