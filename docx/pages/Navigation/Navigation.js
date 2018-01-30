import React, { Component } from "react";
import Col from "antd/lib/col";
import Row from "antd/lib/row";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Col span={18} offset={18}>
          Home About Docx Github
        </Col>
      </div>
    );
  }
}

export default Navigation;
