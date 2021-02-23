import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import subNavImage from "./images/sub-nav.jpg";
import "./Subheader.css";

function Subheader() {
  return (
    <div className="subheader__container">
      <ul className="subheader_links">
        <li className="subheader__hamburger">
          <MenuIcon /> <span>All</span>
        </li>
        <li>Best Sellers</li>
        <li>Prime Video</li>
        <li>Today's Deals</li>
        <li>Prime</li>
        <li>New Releases</li>
        <li>Books</li>
        <li>Gift Ideas</li>
        <li>Electronics</li>
        <li>Beauty</li>
        <li>Gift Cards & Top Up</li>
        <li>Home & Garden</li>
        <li>Vouchers</li>
        <li>Kindle Books</li>
      </ul>
      <div className="subheader__banner">
        <img src={subNavImage} alt="" />
      </div>
    </div>
  );
}

export default Subheader;
