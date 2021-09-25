import React from "react";

const DisplayContainer = ({ calcValue }) => {
  return (
    <div className="calculator__inner--screen  d-flex flex-row">
      <h1
        className="calculator__inner--entrybox"
        id="entry-box"
        type="text"
        value=""
      >
        {calcValue.next || calcValue.total || "0"}
      </h1>
      {/* <p>
        {calcValue.total} {calcValue.operation} {calcValue.next}
      </p> */}
    </div>
  );
};

export default DisplayContainer;
