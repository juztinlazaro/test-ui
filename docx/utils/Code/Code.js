import React, { Component } from "react";

class Code extends Component {

  renderPropsItems = items => 
    items.map((item, index) => {
      return (
        <span key={index}>
          {" "}
          <span className="_text-jade">
           {item.name}
          </span>
          =
          "
          <span className="_text-jade">
           {item.value}
          </span>
          "
        </span>
      );
  });

  render() {

    const {
      element,
      propsItems,
      cssClassName,
      children
    } = this.props;
    
    return (
      <div className="code">
        <span className="_text-crimson">
          {"<"}
          {element}
        </span>

        {propsItems && this.renderPropsItems(propsItems)}

        {cssClassName && <span className="_text-sky">
            {` className="`}
            {cssClassName}
            {`"`}
          </span>}

        {children && <span className="_text-crimson">
            {">"}
          </span>}

        {children && <div>
            <span className="_margin-left"> {children} </span>
            <br />
          </div>}

        {children ? <span className="_text-crimson">
            {"<"}
            {element}
            {">"}
          </span> : <span className="_text-crimson">{"/>"}</span>}
      </div>
    )
  }
};

export default Code;
