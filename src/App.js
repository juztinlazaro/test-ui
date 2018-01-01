import React, { Component } from "react";
import { Icon } from "antd";
import Button from "./ui/WrappAnt";
import "antd/dist/antd.css";
const ButtonGroup = Button.Group;
class App extends Component {
  render() {
    return (
      <div>
        test
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
        <Icon type="step-backward" />
        <ButtonGroup>
          <Button disabled>L</Button>
          <Button disabled>M</Button>
          <Button disabled>R</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default App;
