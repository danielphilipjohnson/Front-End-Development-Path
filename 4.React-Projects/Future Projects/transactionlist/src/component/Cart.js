import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cart() {
  return (
    <div className="saved-cart">
      <p className="brand-logo cart">
        <FontAwesomeIcon icon={["fab", "opencart"]} />
      </p>
      <div className="saved-cart__text">
        <p className="mute-text">You Saved money</p>
        <p>$200.00</p>
      </div>
    </div>
  );
}
