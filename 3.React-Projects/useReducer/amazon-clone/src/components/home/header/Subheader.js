import React from "react";
import "./Subheader.css";
function Subheader() {
  return (
    <div className="subheader__container">
      <div className="subheader__address">
        <span>Deliever to User</span>
        <span>London MK10 9AU</span>
      </div>
      <ul className="subheader_links">
        <li>Books</li>

        <li> Prime Video</li>
        <li> DJPhilip's Amazon</li>
        <li> Best Sellers</li>
        <li> Today's Deals</li>
        <li>Customer Service</li>

        <li> Gift Ideas</li>
        <li> Gift Cards & Top Up</li>
        <li> Home & Garden</li>
        <li> New Releases</li>
        <li>Electronics</li>

        <li>Vouchers</li>

        <li>PC</li>

        <li>Sell</li>
      </ul>
      <div className="subheader__banner">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/AMAZON-FASHION/2020/FASHION/MBFW/MERCH/GW_DESKT_SWMS_400x39._CB407686517_.jpg" alt=""/>
      </div>
    </div>
  );
}

export default Subheader;
