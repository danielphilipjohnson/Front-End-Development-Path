import React from "react";
import { useGlobalContext } from "../../../context/context";

import "./Controls.css";

const Controls = () => {
  const { bankSets, updateSoundBankAndDisplays } = useGlobalContext();

  const handleOnChange = (e) => {
    const soundSetName = e.target.value;
    console.log("handle change called");
    updateSoundBankAndDisplays(soundSetName);
    // updateSoundBankAndDisplay(soundSetName);
  };

  const makeSoundOptions = () => {
    /**
     * Retrieve the name of every bank set
     * Create and option tag with that value
     */

    const soundSetChoices = bankSets.map((drumObj, i, padBankArr) => {
      return (
        <option key={i} value={padBankArr[i].soundBanksName}>
          {padBankArr[i].soundBanksName}
        </option>
      );
    });

    return soundSetChoices;
  };

  return (
    <div className="sample-bank">
      <select
        className="select-samples"
        name="soundset"
        onChange={handleOnChange}
      >
        {makeSoundOptions()}
      </select>

      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

export default Controls;
