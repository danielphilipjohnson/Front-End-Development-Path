import React from "react";

const Btns = ({ handleClick }) => {
  const btnVals = [
    ["ac", "+/-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
  ];
  return (
    <>
      {btnVals.map((btns) => {
        return (
          <div
            className="d-flex flex-row align-content-center py-1 px-2"
            key={btns}
          >
            {btns.map((btn, index) => {
              return (
                <input
                  key={btn + index}
                  className="btn col m-1"
                  type="button"
                  value={btn}
                  onClick={() => handleClick(btn)}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Btns;
