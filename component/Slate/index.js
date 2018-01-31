import React from 'react';

const Slate = props => {
  const wrapperClass = `slate ${props.type}`

  return (
    <section className={wrapperClass}>
       {props.icon && props.icon}

       {props.title && <h1 className="-text-md">{props.title}</h1>}

       {props.description && <p> {props.description} </p>}
    </section>
  );
}

export default Slate;