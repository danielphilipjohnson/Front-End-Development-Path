import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import TransactionList from "./component/TransactionList";

import "./App.css";

import bankLogo from "./assests/img/banklogo.png";
import masterCardImg from "./assests/img/master-card.png";

library.add(fab);

function App() {
  return (
    <div className="App">
      <div className="transaction">
        <div className="transaction__header">
          <div class="logo">
            <img src={bankLogo} alt="" />
          </div>

          <h2 className="transaction__budget">$3,500</h2>
          <p className="transaction__subheading">Monthly budget</p>
        </div>

        <div className="transaction__list-container">
          <header className="header">
            <h2>Transactions</h2>
            <span className="chevron">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </header>

          <TransactionList />
        </div>
      </div>

      <div>
        <h2>My Cards</h2>
        <img src={masterCardImg} alt="" className="bank-card" />
      </div>
    </div>
  );
}

export default App;
