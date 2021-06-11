import React, { useState } from "react";

import Header from "./header/index";
import Display from "./display/index";

import CalculatorButtons from "./btns/btns";

import CalculatorLogic from "../../calculation/calculator";

const Calculator = () => {
  const [calcValue, setCalcValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonValue) => {
    setCalcValue(CalculatorLogic(calcValue, buttonValue));
  };

  return (
    <div className="calculator">
      <div className="calculator__outershell mx-2 d-flex flex-column">
        <div className="calculator__inner">
          <Header />
          <Display calcValue={calcValue} />
          <CalculatorButtons handleClick={handleClick} />

          <div className="d-flex flex-row align-content-center py-1 px-2">
            <input
              className="btn col-sm-6 m-1"
              type="button"
              value="0"
              onClick={() => handleClick("0")}
            />
            <input
              className="btn col m-1"
              type="button"
              value="."
              onClick={() => handleClick(".")}
            />
            <input
              className="btn col m-1"
              type="button"
              value="="
              onClick={() => handleClick("=")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
