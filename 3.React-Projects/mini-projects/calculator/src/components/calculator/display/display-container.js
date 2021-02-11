import React from "react";

const DisplayContainer = ({ calcValue }) => {
  return (
    <div class="calculator__inner--screen p-1 d-flex flex-row">
      <h1
        class="calculator__inner--entrybox p-1"
        id="entry-box"
        type="text"
        value=""
      >
        {calcValue.next || calcValue.total || "0"}
      </h1>
    </div>
  );
};

export default DisplayContainer;
