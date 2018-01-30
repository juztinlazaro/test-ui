import React, { Component } from "react";
import Tabs from "antd/lib/tabs";
import SimplerPanel from "./SimplePanel/SimplePanel";
const TabPane = Tabs.TabPane;

class PanelDocx extends Component {
  render() {
    return (
      <section className="Loading-section">
        <h1 className="page-title"> Panel </h1>
        <p> These are useful to put an element in a box. </p>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Simple Panel" key="1">
            <SimplerPanel />
          </TabPane>

          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>

          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </section>
    );
  }
}

export default PanelDocx;
