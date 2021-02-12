import React from "react";
import { useGlobalContext } from "../../../context/context";

function SelectSoundBank({ classes, name, id }) {
  const {
    bankSets,
    updateSoundBankAndDisplays,
    currentSoundBanksName,
  } = useGlobalContext();

  console.log(currentSoundBanksName);
  const handleOnChange = (e) => {
    const soundSetName = e.target.value;
    updateSoundBankAndDisplays(soundSetName);
  };

  const makeSoundOptions = () => {
    if (bankSets) {
      const soundSetChoices = bankSets.map((_, i, padBankArr) => {
        if (currentSoundBanksName === padBankArr[i].soundBanksName) {
          return (
            <option
              key={i}
              value={padBankArr[i].soundBanksName}
              selected="selected"
            >
              {padBankArr[i].soundBanksName}
            </option>
          );
        } else {
          return (
            <option key={i} value={padBankArr[i].soundBanksName}>
              {padBankArr[i].soundBanksName}
            </option>
          );
        }
      });
      return soundSetChoices;
    }
  };

  return (
    <>
      <select
        className={classes}
        name={name}
        id={id}
        onChange={handleOnChange}
        selected={currentSoundBanksName}
      >
        {makeSoundOptions()}
      </select>
    </>
  );
}

export default SelectSoundBank;
