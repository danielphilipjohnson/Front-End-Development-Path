import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Cart from "./Cart";

import transactions from "../shared/data";

import "./transactionList.css";

export default function TransactionList() {
  const transactionElements = transactions.map((transaction) => {
    return (
      <li className="transaction__list__item">
        <span className="brand-logo">
          <FontAwesomeIcon icon={["fab", `${transaction.icon}`]} />
        </span>
        <div className="transaction__list__item--product">
          <p>{transaction.product}</p>
          <p className="mute-text">{transaction.type}</p>
        </div>

        <p className="transaction__list__item--product-cost">
          ${transaction.cost}
        </p>
      </li>
    );
  });
  return (
    <>
      <ul className="transaction__list">{transactionElements}</ul>
      <Cart />
    </>
  );
}
