import React from "react";
import SelectSoundBank from "./SelectSoundBank";
import "./Controls.css";

const Controls = () => {
  return (
    <div className="sample-bank">
      <SelectSoundBank
        classes={"select-samples"}
        name={"samples"}
        id={"samples"}
      />
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

export default Controls;
