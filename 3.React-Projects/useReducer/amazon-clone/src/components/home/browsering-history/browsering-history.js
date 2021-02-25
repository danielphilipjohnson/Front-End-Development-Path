import React from "react";
import "./browsering-history.css";

import item1 from "../../../images/items/item1.jpg";
import item2 from "../../../images/items/item2.jpg";
import item3 from "../../../images/items/item3.jpg";
import item4 from "../../../images/items/item4.jpg";
import item5 from "../../../images/items/item5.jpg";
import item6 from "../../../images/items/item6.jpg";
import item7 from "../../../images/items/item7.jpg";

// random generate which products
function BrowseringHistory() {
  return (
    <div className="recommended__items__container">
      <div className="recommended__items__row">
        <h2 className="browsering__items-title">
          Inspired by your browsing history
        </h2>

        <div className="browsering__items-cards">
          <div className="browsering__items-product">
            <img src={item1} alt="product description" />
            <div className="browsering__items-description-text">
              <p>
                AMD Ryzen 7 3700X Processor (8C/16T, 36 MB Cache, 4.4 GHz Max
                Boost)
              </p>
              <p>
                <span className="rating">★ ★ ★ ★ </span> <span>86,555</span>
              </p>

              <p className="price">£288.99 </p>
            </div>
          </div>

          <div className="browsering__items-product">
            <img src={item2} alt="product description" />
            <div className="browsering__items-description-text">
              <p>
                AMD Ryzen 7 3700X Processor (8C/16T, 36 MB Cache, 4.4 GHz Max
                Boost)
              </p>
              <p>
                <span className="rating">★ ★ ★ ★ </span> <span>86,555</span>
              </p>

              <p className="price">£288.99 </p>
            </div>
          </div>

          <div className="browsering__items-product">
            <img src={item3} alt="product description" />
            <div className="browsering__items-description-text">
              <p>
                AMD Ryzen 7 3700X Processor (8C/16T, 36 MB Cache, 4.4 GHz Max
                Boost)
              </p>
              <p>
                <span className="rating">★ ★ ★ ★ </span> <span>86,555</span>
              </p>

              <p className="price">£288.99 </p>
            </div>
          </div>

          <div className="browsering__items-product">
            <img src={item4} alt="product description" />
            <div className="browsering__items-description-text">
              <p>
                AMD Ryzen 7 3700X Processor (8C/16T, 36 MB Cache, 4.4 GHz Max
                Boost)
              </p>
              <p>
                <span className="rating">★ ★ ★ ★ </span> <span>86,555</span>
              </p>

              <p className="price">£288.99 </p>
            </div>
          </div>

          <div className="browsering__items-product">
            <img src={item5} alt="product description" />
            <div className="browsering__items-description-text">
              <p>
                AMD Ryzen 7 3700X Processor (8C/16T, 36 MB Cache, 4.4 GHz Max
                Boost)
              </p>
              <p>
                <span className="rating">★ ★ ★ ★ </span> <span>86,555</span>
              </p>

              <p className="price">£288.99 </p>
            </div>
          </div>

          <div className="browsering__items-product">
            <img src={item6} alt="product description" />
            <div className="browsering__items-description-text">
              <p>
                AMD Ryzen 7 3700X Processor (8C/16T, 36 MB Cache, 4.4 GHz Max
                Boost)
              </p>
              <p>
                <span className="rating">★ ★ ★ ★ </span> <span>86,555</span>
              </p>

              <p className="price">£288.99 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseringHistory;
