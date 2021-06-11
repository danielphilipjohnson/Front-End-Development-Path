import Big from "big.js";

/**
 *
 * @param {*} state is an object containing
 * Total: String the running total
 * Next:String the next number that will be operated on
 * Operation: String  +, -, /
 * @param {*} buttonValue
 */

const performOperation = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne || "0");

  const two = Big(
    numberTwo || (operation === "/" || operation === "*" ? "1" : "0")
  );
  //If two is null and dividing or multiplying, then current value is 1 to deal with
  // divide by zero // other operations put 0

  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "*") {
    return one.times(two).toString();
  }
  if (operation === "/") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  throw Error(`Unknown operation '${operation}'`);
};

const isNumber = (item) => {
  return /[0-9]+/.test(item);
};

const clearCalculation = () => {
  return {
    total: null,
    next: null,
    operation: null,
  };
};

const calculateNext = (next, buttonValue, stateObj, operation) => {
  if (next === "0") {
    // if next is 0 overwrite with button value
    // to prevent 01 displaying
    return {
      next: buttonValue,
      total: stateObj.total,
      operation: stateObj.operation,
    };
  } else {
    // concat the numbers
    // buttonValue = 8
    // 8 + buttonValue = 88
    const updatedNext = next + buttonValue;
    return {
      next: updatedNext,
      total: null,
      operation: operation,
    };
  }
};

export default function calculator(stateObj, buttonValue) {
  if (buttonValue === "ac") {
    return clearCalculation();
  }

  if (isNumber(buttonValue)) {
    // dont allow zero to be pushed twice
    if (buttonValue === "0" && stateObj.next === "0") {
      return clearCalculation();
    }

    // check if an operation has been pressed
    if (stateObj.operation) {
      if (stateObj.next) {
        return {
          next: stateObj.next + buttonValue,
          total: stateObj.total,
          operation: stateObj.operation,
        };
      }

      return {
        next: buttonValue,
        total: stateObj.total,
        operation: stateObj.operation,
      };
    }
    // If there is no operation pressed, update next and clear the value
    if (stateObj.next) {
      return calculateNext(
        stateObj.next,
        buttonValue,
        stateObj,
        stateObj.operation
      );
    }

    return {
      next: buttonValue,
      total: stateObj.total,
      operation: stateObj.operation,
    };
  }

  if (buttonValue === "%") {
    if (stateObj.operation && stateObj.next) {
      const result = performOperation(
        stateObj.total,
        stateObj.next,
        stateObj.operation
      );
      return {
        total: Big(result).div(Big("100")).toString(),
        next: null,
        operation: null,
      };
    }
    if (stateObj.next) {
      return {
        next: Big(stateObj.next).div(Big("100")).toString(),
      };
    }
    return {};
  }

  if (buttonValue === ".") {
    if (stateObj.next) {
      // ignore a . if the next number already has one
      if (stateObj.next.includes(".")) {
        return {};
      }
      console.log("next total ", stateObj.total);
      return {
        next: stateObj.next + ".",
        total: stateObj.total,
        operation: stateObj.operation,
      };
    }
    return { next: "0." };
  }

  if (buttonValue === "=") {
    if (stateObj.next && stateObj.operation) {
      return {
        total: performOperation(
          stateObj.total,
          stateObj.next,
          stateObj.operation
        ),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  if (buttonValue === "+/-") {
    if (stateObj.next) {
      // DRY
      return {
        next: (-1 * parseFloat(stateObj.next)).toString(),
        total: stateObj.total,
        operation: stateObj.operation,
      };
    }
    if (stateObj.total) {
      return { total: (-1 * parseFloat(stateObj.total)).toString() };
    }
    return { total: null, next: null, operation: null };
  }

  // need to work on operation
  if (stateObj.operation) {
    return {
      total: performOperation(
        stateObj.total,
        stateObj.next,
        stateObj.operation
      ),
      next: null,
      operation: buttonValue,
    };
  }

  // if a number has not been entered first just save the operation for later
  if (!stateObj.next) {
    return { operation: buttonValue };
  }

  // set the current value in next to the total
  // and save the operation
  return {
    total: stateObj.next,
    next: null,
    operation: buttonValue,
  };
}
