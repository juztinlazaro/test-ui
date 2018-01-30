import React from 'react';
import Wysiwyg from '../../../../lib/Wysiwyg';
// import Wysiwyg from 'COMPONENT/Wysiwyg';

const Basic = props => {
  return (
    <section>
      <div className="code">
        <div className="_spacer">
          <span className="_text-crimson">
            { 'import ' }
          </span>

          <span className="_text-sky">
            {' Wysiwyg '}
          </span>

          <span className="_text-crimson">
            { 'from ' }
          </span>

          <span className="_text-sky">
            {' "Test_ui_kit/lib/Wysiwyg"; '}
          </span>
        </div>
        

        <div className="_spacer">
          <span className="_text-jade">
            handleGetConent
          </span>

          <span className="_text-crimson">
            { ' = content => { ' }
          </span>
           
          <h4 className="_text-sky _margin-left">
            { ' this.setState({ data: content }) ' }
          </h4>
          
          <span className="_text-crimson">
            }
          </span>
        </div> 

        <h4 className="_text-crimson">
          { '<Wysiwyg ' }
        </h4>
        
        <div className="_margin-left">
          <h4 className="_text-sky">
            {' content={this.state.content} '}
          </h4>

          <h4 className="_text-sky">
            {' onChange={this.handleGetConent} '}
          </h4>

          <h4 className="_text-sky">
            {' wrapperClassName="-wrapper" '}
          </h4>

          <h4 className="_text-sky">
            {' editorClass="-editor" '}
          </h4>

          <h4 className="_text-sky">
            {' toolbarClassName="-toolbar" '}
          </h4>
        </div>

        <h4 className="_text-crimson">
          {' /> '}
        </h4>
      </div>

      <div className="_spacer-md" />

      <h1> Input </h1>

      <Wysiwyg
        content={props.content}
        onChange={props.onGetConent}
        wrapperClassName="-wrapper"
        editorClass="-editor"
        toolbarClassName="-toolbar"
      />
    </section>
  )
};

export default Basic;