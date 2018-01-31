import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col'

const Footer = () => (
  <footer>
    <Row>
      <Col span={12} className="_text-left">
        &copy; Copyright Test ui 2018. Created and maintained by the Front End
        team at Test ui.
      </Col>

      <Col className="_text-right" span={12}>
        Currently 1.0.19.
      </Col>
    </Row>
  </footer>
);

export default Footer;
