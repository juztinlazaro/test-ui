import React, { Component } from 'react'
import Tabs from 'antd/lib/tabs';
import Basic from './Basic/Basic';
const TabPane = Tabs.TabPane;

class WysiwygDocx extends Component {
  state = {
    content: `<h1 style="text-align:center;">dsadasdsadasdsaddsadsa</h1>
    <p></p>
    <h2 style="text-align:right;">dsadasdasdsa</h2>`,
    data: '',
  }

  handleGetConent = content => {
    console.log(content);
    this.setState({ data: content })
  }

  render() {
    return (
      <div className="Wysiwyg-docx-section">
        <h1 className="page-title">
          Wysiwyg
        </h1>

        <Tabs defaultActiveKey="1">
          <TabPane tab="Basic Wysiwyg" key="1">
            <Basic
              onGetConent={this.handleGetConent}
              content={this.state.content}
            />
          </TabPane>
          
          <TabPane tab="Tab 2" key="2">
            <Basic
              onGetConent={this.handleGetConent}
              content={this.state.content}
            />
          </TabPane>
          
          <TabPane tab="Tab 3" key="3">
          Nothing to do here, WIP
          </TabPane>
        </Tabs>

        <div className="_spacer-md" />
        
        <div className="output">
          <h1> Output </h1>
          <div dangerouslySetInnerHTML={{ __html: this.state.data }} />
        </div>
      </div>
    );
  }
}
export default WysiwygDocx;