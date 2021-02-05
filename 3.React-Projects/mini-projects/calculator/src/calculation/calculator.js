/**
 *
 * @param {*} state is an object containing
 * Total: String the running total
 * Next:String the next number that will be operated on
 * Operation: String  +, -, /
 * @param {*} buttonValue
 */

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

const calculateNext = (next, buttonValue) => {
  if (next === "0") {
    // if next is 0 overwrite with button value
    // to prevent 01 displaying
    return {
      next: buttonValue,
      total: null,
      // operation: null,
    };
  } else {
    // concat the numbers
    // buttonValue = 8
    // 8 + buttonValue = 88
    const updatedNext = next + buttonValue;
    return {
      next: updatedNext,
      total: null,
      operation: null,
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
      console.log(stateObj.next + buttonValue);
      if (stateObj.next) {
        console.log(stateObj.next + buttonValue);
        return {
          next: stateObj.next + buttonValue,
        };
      }
      return {
        next: buttonValue,
        // total: stateObj.total,
        // operation: stateObj.operation,
      };
    }

    if (stateObj.next) {
      return calculateNext(stateObj.next, buttonValue);
    }

    return {
      next: buttonValue,
      total: null,
      operation: null,
    };
  }

  if (buttonValue === "+/-") {
    if (stateObj.next) {
      return { next: (-1 * parseFloat(stateObj.next)).toString() };
    }
    if (stateObj.total) {
      return { total: (-1 * parseFloat(stateObj.total)).toString() };
    }
    return { total: null, next: null, operation: null };
  }

  // need to work on operation
  if (stateObj.operation) {
    return {
      total: null,
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
