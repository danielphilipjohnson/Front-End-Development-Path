import React from "react";

import Header from "./header/index";
import Display from "./display/index";

import CalculatorButtons from "./btns/btns";

const Calculator = () => {
  return (
    <div class="calculator pt-4">
      <div class="calculator__outershell p-2 d-flex flex-column">
        <div class="calculator__inner">
          <Header />
          <Display />
          <CalculatorButtons />

          <div class="d-flex flex-row align-content-center py-1 px-4">
            <input class="btn col-sm-6 m-1" type="button" value="0" />
            <input class="btn col m-1" type="button" value="." />
            <input class="btn col m-1" type="button" value="=" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
