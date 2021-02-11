import React from "react";

const BtnRowTemplate = ({ childern }) => {
  return (
    <div className="d-flex flex-row align-content-center py-1 px-2">
      {childern}
    </div>
  );
};

export default BtnRowTemplate;
