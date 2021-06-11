import React from "react";
import HPlogo from "../../../images/hp.png";
const HeaderContainer = () => {
  return (
    <div className="d-flex flex-row">
      <p className="calculator__inner--title col">HP 20b Business Consultant</p>
      <img
        className="calculator__inner--logo img-fluid"
        src={HPlogo}
        alt="hp brand"
      />
    </div>
  );
};

export default HeaderContainer;
