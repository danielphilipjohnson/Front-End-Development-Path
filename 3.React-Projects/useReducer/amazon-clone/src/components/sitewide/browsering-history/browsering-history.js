import React, { useState, useEffect } from "react";

import generateStars from "./utils";

import item1 from "../../../images/items/item1.jpg";
import item2 from "../../../images/items/item2.jpg";
import item3 from "../../../images/items/item3.jpg";
import item4 from "../../../images/items/item4.jpg";
import item5 from "../../../images/items/item5.jpg";
import item6 from "../../../images/items/item6.jpg";
// import item7 from "../../../images/items/item7.jpg";

import "./browsering-history.css";

const data = [
  {
    id: 1,
    description: `AMD Ryzen 7 3700X Processor (8C/16T, 36 MB Cache, 4.4 GHz Max
  Boost)`,
    image: item1,
    rating: 5,
    likes: `86,555`,
    price: `£288.99`,
  },
  {
    id: 2,
    description: `Corsair Vengeance RGB PRO 16 GB (2 x 8 GB) DDR4 3200 MHz C16 XMP 2.0 Enthusiast RGB LED Illuminated…`,
    image: item2,
    rating: 5,
    likes: `86,555`,
    price: `£86.99`,
  },
  {
    id: 3,
    description: `Samsung 970 EVO Plus 1 TB PCIe NVMe M.2 (2280) Internal Solid State Drive (SSD) (MZ-V7S1T0)`,
    image: item3,
    rating: 4,
    likes: `30,789`,
    price: `£143.80`,
  },
  {
    id: 4,
    description: `Tommy Hilfiger Mens Analogue Classic Quartz Watch with Gold Plated Strap `,
    image: item4,
    rating: 4.5,
    likes: `425`,
    price: `£89.99`,
  },
  {
    id: 5,
    description: `Gigabyte AORUS GeForce RTX 3060 Ti MASTER 8GB Graphics Card`,
    image: item5,
    rating: 4.5,
    likes: `7`,
    price: `£1,399.00`,
  },
  {
    id: 6,
    description: `Corsair Hydro 100i RGB Platinum, Hydro Series, 240 mm Radiator (Dual ML PRO 120 mm RGB PWM Fans, Advanced RGB Lighting and Fan Control with Software) Liquid CPU Cooler, Black `,
    image: item6,
    rating: 4.5,
    likes: `7`,
    price: `£112.79`,
  },
];

function BrowseringHistory() {
  const [browseringHistoryProducts, setBrowseringHistoryProducts] = useState(
    null
  );

  const getData = () => {
    return data;
  };

  useEffect(() => {
    setBrowseringHistoryProducts(getData());
  }, []);

  if (browseringHistoryProducts) {
    return (
      <div className="browsering__items__container">
        <div className="browsering__items__row">
          <h2 className="browsering__items-title">
            Inspired by your browsing history
          </h2>

          <div className="browsering__items-cards">
            {browseringHistoryProducts.map((product) => {
              return (
                <div className="browsering__items-product" key={product.id}>
                  <img src={product.image} alt="product description" />
                  <div className="browsering__items-description-text">
                    <p>{product.description}</p>
                    <p>
                      <span className="rating">
                        {generateStars(product.rating)}
                      </span>{" "}
                      <span>{product.likes}</span>
                    </p>
                    <p className="price">{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading ....</div>;
  }
}

export default BrowseringHistory;
