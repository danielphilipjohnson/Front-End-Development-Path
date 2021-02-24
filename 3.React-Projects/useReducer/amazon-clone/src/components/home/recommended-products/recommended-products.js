import React from "react";
import "./recommended-products.css";

import item1 from "../../../images/items/item1.jpg";
import item2 from "../../../images/items/item2.jpg";
import item3 from "../../../images/items/item3.jpg";
import item4 from "../../../images/items/item4.jpg";
import item5 from "../../../images/items/item5.jpg";
import item6 from "../../../images/items/item6.jpg";
import item7 from "../../../images/items/item7.jpg";

function RecommendedProducts() {
  return (
    <div className="recommended__items__container">
      <div className="recommended__items__row">
        <div className="">
          <h2 className="recommended__items-title">
            Recommended items other customers often buy again
          </h2>
        </div>
        <div className="recommended__items-cards">
          <img className="recommended__items-product" src={item1} alt="" />
          <img className="recommended__items-product" src={item2} alt="" />
          <img className="recommended__items-product" src={item3} alt="" />
          <img className="recommended__items-product" src={item4} alt="" />
          <img className="recommended__items-product" src={item5} alt="" />
          <img className="recommended__items-product" src={item6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RecommendedProducts;
