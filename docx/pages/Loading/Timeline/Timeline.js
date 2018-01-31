import React from 'react';
import TimelineLoading from "COMPONENT/TimelineLoading";
import Code from "../../../utils/Code/Code";

const Timeline = () => {
  return <section>
      <p>
        This is just a code implementation of <a href="https://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html" target="_blank">
          George Phillips's
        </a> article. All credits go to him.
      </p>

      <TimelineLoading />

      <h4>Usage: </h4>
      <div className="code">
        <span className="_text-crimson"> import </span>
        <span className="_text-sky"> TimelineLoading </span>
        <span className="_text-crimson"> from </span>
        <span className="_text-jade"> "test_ui/lib/TimelineLoading" </span>
        <Code element="TimelineLoading" />
      </div>
    </section>;
}

export default Timeline;