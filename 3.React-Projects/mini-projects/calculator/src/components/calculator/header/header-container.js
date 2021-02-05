import React from "react";
import HPlogo from "../../../images/hp.png";
const HeaderContainer = () => {
  return (
    <div class="d-flex flex-row p-2">
      <p class="calculator__inner--title col">HP 20b Business Consultant</p>
      <img class="calculator__inner--logo img-fluid" src={HPlogo} alt="" />
    </div>
  );
};

export default HeaderContainer;
