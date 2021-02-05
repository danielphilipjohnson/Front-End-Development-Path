/**
 *
 * @param {*} state is an object containing
 * Total: String the running total
 * Next:String the next number that will be operated on
 * Operation: String  +, -, /
 * @param {*} buttonValue
 */

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
      operation: null,
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

  //idiot implementation change later
  if (!NaN) {
    // dont allow zero to be pushed twice
    if (buttonValue === "0" && stateObj.next === "0") {
      return { total: null, next: null, operation: null };
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
}
