import React, { Component } from "react";
import Layout from "antd/lib/layout";

import Routes from "./routes/routes";
import SideBar from "PAGES/Sidebar/Sidebar";
import Navigation from "PAGES/Navigation/Navigation";
import Footers from "PAGES/Footer/Footer";

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return <Layout className="Layout-section">
        <Sider className="Sidebar-section">
          <SideBar />
        </Sider>

        <Layout>
          <Header className="Header-section">
            <Navigation />
          </Header>

          <Content className="Content-section">
            <Routes />
          </Content>

          <Footer className="Footer-section">
            <Footers />
          </Footer>
        </Layout>
      </Layout>;
  }
}

export default App;
