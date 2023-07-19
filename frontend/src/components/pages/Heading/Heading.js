import React from 'react';
import './Heading.css'
const Heading = (props) => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        {props.heading}
      </h1>
    </div>
  );
};

export default Heading;
