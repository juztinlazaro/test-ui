import React from 'react';

const BlockCode = props => {
  return <div className="code">
      <span className="_text-crimson">
        {"<"}
        {props.element}
      </span>

      <span className="_text-sky">
        {` className="`}
        {props.cssClassName}
        {`"`}
      </span>

      <span className="_text-crimson">{">"}</span>

      {props.children}

      <span className="_text-crimson">
        {"<"}
        {props.element}
        {">"}
      </span>
    </div>;
};

export default BlockCode;