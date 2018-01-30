import React, { Component } from "react";
import Tabs from "antd/lib/tabs";
import TextColor from "./TextColor/TextColor";
import TextAlignment from "./TextAlignment/TextAlignment";
import Spacer from "./Spacer/Spacer";
const TabPane = Tabs.TabPane;

class Helpers extends Component {
  render() {
    return (
      <section className="Helpers-section">
        <h1 className="page-title"> Helpers </h1>
        <p>
          Utility classes are available for usage. But take note: Use them
          sparingly.
        </p>

        <Tabs defaultActiveKey="1">
          <TabPane tab="Text Color" key="1">
            <TextColor />
          </TabPane>

          <TabPane tab="Text Alignment" key="2">
            <TextAlignment />
          </TabPane>

          <TabPane tab="Spacer" key="3">
            <Spacer />
          </TabPane>
        </Tabs>
      </section>
    );
  }
}

export default Helpers;
