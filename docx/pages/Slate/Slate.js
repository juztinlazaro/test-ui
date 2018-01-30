import React, { Component } from 'react';
import Tabs from "antd/lib/tabs";
import BasicSlate from "./BasicSlate/BasicSlate";
const TabPane = Tabs.TabPane;
class Slate extends Component {
 render() {
    return <section>
        <h2 className="page-title"> SLATE </h2>
        <p>
          Use this as a placeholder for loading collections with lack of
          resources or empty results. Together with an icon, it gives an
          instant definition on what the state is for.
        </p>

        <Tabs defaultActiveKey="1">
          <TabPane tab="Slate" key="1">
            <BasicSlate />
          </TabPane>

          <TabPane tab="CENTER HALF-SIZED SLATE" key="3">
            Content of tab 3
          </TabPane>

          <TabPane tab="LOADING STATE" key="4">
            Content of tab 4
          </TabPane>

          <TabPane tab="WITH BUTTON" key="5">
            Content of tab 4
          </TabPane>
        </Tabs>
      </section>;
 }
}

export default Slate;