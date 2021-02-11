import React from "react";

const DisplayContainer = ({ calcValue }) => {
  console.log(calcValue);
  return (
    <div className="calculator__inner--screen p-1 d-flex flex-row">
      <h1
        className="calculator__inner--entrybox p-1"
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
