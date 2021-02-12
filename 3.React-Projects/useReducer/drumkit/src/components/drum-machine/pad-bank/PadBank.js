import React, { Component } from "react";
import DrumButton from "./DrumButton";
import { useGlobalContext } from "../../../context/context";
import "./PadBank.css";

const PadBank = (props) => {
  const { currentSoundBank } = useGlobalContext();
  let soundFiles = currentSoundBank.soundFiles;

  const drumButtons = soundFiles.map((drumObj, i, soundFilesArr) => {
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

// class PadBank extends Component {
//   render() {
//     let soundFiles = this.props.currentBankSet.soundFiles;

//     const drumButtons = soundFiles.map((drumObj, i, soundFilesArr) => {
//       return (
//         <DrumButton
//           updateDisplaySoundFileName={this.props.updateDisplaySoundFileName}
//           id={i}
//           audioVolume={this.props.audioVolume}
//           name={soundFilesArr[i].id}
//           soundId={soundFilesArr[i].id}
//           key={soundFilesArr[i].keyTrigger}
//           keyCode={soundFilesArr[i].keyCode}
//           keyTrigger={soundFilesArr[i].keyTrigger}
//           source={soundFilesArr[i].url}
//         />
//       );
//     });

//     return (
//       <div className="padBank">
//         <div className="drum-buttons">{drumButtons}</div>
//       </div>
//     );
//   }
// }
export default PadBank;
