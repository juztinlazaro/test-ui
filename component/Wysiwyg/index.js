import React, { Component } from 'react'
import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js'
import { convertToHTML } from 'draft-convert';
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Config from './config';

class Wysiwyg extends Component {
  constructor(props) {
    super(props);

    let editorState;

    if (this.props.content) {
      const blocksFromHTML = htmlToDraft(`${this.props.content}`);
      const contentState = ContentState.createFromBlockArray(blocksFromHTML);
      editorState = EditorState.createWithContent(contentState);
    }
    else {
      editorState = EditorState.createEmpty();
    }

    this.state = {
      editorState
    };

    this.handleChange = editorState => {
      const content = editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()))
      if (this.props.onChange) {
        this.props.onChange(content);
      } else {
        this.props.onChange(content);
      }
    }
  }

  render() {
    const { 
      wrapperClassName,
      editorClass,
      toolbarClassName,
    } = this.props;
    const wrapper = `wrapper-class ${wrapperClassName}`
    const editor = `editor-class ${editorClass}`
    const toolbar = `toolbar-class ${toolbarClassName}`

    return (
      <div className="Wysiwyg-section">
        <Editor
          toolbar={Config}
          defaultEditorState={ this.state.editorState }
          onEditorStateChange={ callback => this.handleChange(callback)}
          wrapperClassName={wrapper}
          editorClassName={editor}
          toolbarClassName={toolbar}
        />
      </div> 
    );
  }
}
export default Wysiwyg;