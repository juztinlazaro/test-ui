import React, { Component } from "react";
import Tabs from "antd/lib/tabs";
import { Link } from 'react-router-dom';
import FullWidth from "./FullWidth/FullWidth"
import Timeline from "./Timeline/Timeline";
const TabPane = Tabs.TabPane;

class Loading extends Component {
  state = {
    fullWidthLoading: false
  };

  handleLoading = () => {
    this.setState({ fullWidthLoading: true });
  };

  handleUnloading = () => {
    this.setState({ fullWidthLoading: false });
  };

  render() {
    return (
      <section className="Loading-section">
        <h1 className="page-title"> Loading UI</h1>

        <p>
          We only wrap ant design Spin for our loading, for more info please
          check{" "}
          <Link to="https://ant.design/components/spin/" target="_blank">
            the documentation here
          </Link>{" "}
          When part of the page is waiting for asynchronous data or during a
          rendering process, an appropriate loading animation can effectively
          alleviate users' inquietude.
        </p>

        <Tabs className="tabs" defaultActiveKey="1">
          <TabPane tab="Full width loading" key="1">
            <FullWidth
              status={this.state.fullWidthLoading}
              onLoading={this.handleLoading}
              onUnloading={this.handleUnloading}
            />
          </TabPane>

          <TabPane tab="Timeline loading" key="2">
            <Timeline />
          </TabPane>

          <TabPane tab="Loading 3" key="3">
            Content of Loding 3, coming soon
          </TabPane>
        </Tabs>
      </section>
    );
  }
}

export default Loading;
