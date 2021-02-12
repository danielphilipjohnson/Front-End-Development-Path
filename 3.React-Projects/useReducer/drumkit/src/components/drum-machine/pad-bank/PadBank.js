import React from "react";
import DrumButton from "./DrumButton";
import { useGlobalContext } from "../../../context/context";
import "./PadBank.css";

const PadBank = (props) => {
  const { currentSoundBank } = useGlobalContext();
  let soundFiles = currentSoundBank.soundFiles;

  const drumButtons = soundFiles.map((_, i, soundFilesArr) => {
    return (
      <DrumButton
        id={i}
        audioVolume={props.audioVolume}
        name={soundFilesArr[i].id}
        soundId={soundFilesArr[i].id}
        key={soundFilesArr[i].keyTrigger}
        keyCode={soundFilesArr[i].keyCode}
        keyTrigger={soundFilesArr[i].keyTrigger}
        source={soundFilesArr[i].url}
      />
    );
  });

  return (
    <div className="padBank">
      <div className="drum-buttons">{drumButtons}</div>
    </div>
  );
};

export default PadBank;
