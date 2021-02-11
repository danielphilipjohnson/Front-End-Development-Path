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
    <div class="calculator">
      <div class="calculator__outershell mx-2 d-flex flex-column">
        <div class="calculator__inner">
          <Header />
          <Display calcValue={calcValue} />
          <CalculatorButtons handleClick={handleClick} />

          <div class="d-flex flex-row align-content-center py-1 px-2">
            <input
              class="btn col-sm-6 m-1"
              type="button"
              value="0"
              onClick={() => handleClick("0")}
            />
            <input
              class="btn col m-1"
              type="button"
              value="."
              onClick={() => handleClick(".")}
            />
            <input
              class="btn col m-1"
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
