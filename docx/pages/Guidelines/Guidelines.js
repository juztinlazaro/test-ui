import React, { Component } from "react";

class Guidelines extends Component {
  render() {
    return (
      <section className="GuideLines-section">
        <h2 className="page-title">Guide lines</h2>
        <p className="description">
          While not limited to, we have a set of guidelines and standards to
          keep our code consistent. This covers both JS and CSS.
        </p>
        <p>
          Please check our frontend documentation{" "}
          <a
            target="_blank"
            href="https://github.com/Test ui/Test ui_ReactStarterKit/wiki"
          >
            here.
          </a>
        </p>

        <h2>
          {" "}
          The UI Kit that powers Test ui's internal projects built on ReactJS,
          Sass and wrap in Antdesign.
        </h2>

        <h4 className="_text-crimson">Usage</h4>

        <p>We are using sass, simply import the `scss` file.</p>

        <div className="code">
          // compiled
          <br />
          @import "..path/node_modules/ui_kit/css/main.scss"
          <br />
          <br />
          //variables
          <br />
          @import "..path/ui_kit/css/utils/variables"
          <br />
          <br />
          //helpers
          <br />
          @import "..path/ui_kit/css/utils/helpers"
        </div>

        <h4 className="_text-crimson"> Or import in app root</h4>
        <div className="code">
          import 'test_ui/css/main.css'
        </div>

        <h4 className="_text-crimson">
          Importing library
        </h4>
        <div className="code">
          // example 
          <br />
          <h4>import TimelineLoading from 'test_ui/lib/TimelineLoading'</h4>
          <br />
          {" <TimelineLoading /> "}
        </div>
      </section>
    );
  }
}

export default Guidelines;
