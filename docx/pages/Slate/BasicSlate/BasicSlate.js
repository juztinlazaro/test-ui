import React, { Component } from 'react';
import Icon from 'antd/lib/icon';
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
        <section className="slate _spacer-md">
          <Icon className="-text-xl" type="mail" />
          <h1 className="-text-md"> This is a blank slate </h1>
          <p>
            Use it to provide information when no dynamic content exists.
          </p>
        </section>

        <h3>
          Add the
          <span className="_text-pumpkin"> .-spacious </span>
          class to your slate.
        </h3>

        <section className="slate _spacer-md -spacious">
          <Icon className="-text-xl" type="mail" />
          <h1 className="-text-md"> Slate spacious </h1>
          <p>
            Use it to provide information when no dynamic content exists.
          </p>
        </section>

        <h3>
          Add the
          <span className="_text-pumpkin"> .-plain </span>
          class to your slate.
        </h3>

        <section className="slate _spacer-md -plain">
          <Icon className="-text-xl" type="mail" />
          <h1 className="-text-md"> Slate with No Background </h1>
          <p>
            Use it to provide information when no dynamic content exists.
          </p>
        </section>

        <section>
          <h4> Usage: </h4>
          <BlockCode element="div" cssClassName="slate">
            <Code element="Icon" propsItems={this.state.type} />

            <Code element="h1">This is a blank slate</Code>

            <Code element="p">
              Use it to provide information when no dynamic content exists.
            </Code>
          </BlockCode>
        </section>
      </section>;
  }
}

export default BasicSlate;