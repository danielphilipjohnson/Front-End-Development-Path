import React, { useEffect, useCallback } from "react";
import { useGlobalContext } from "../../../context/context";

const DrumButton = ({
  id,
  keyTrigger,
  source,
  keyCode,
  soundId,
  updateDisplaySoundFileName,
}) => {
  const { volume } = useGlobalContext();

  const playSound = (e) => {
    const sound = document.getElementById(keyTrigger);

    updateDisplaySoundFileName(soundId);
    sound.volume = volume;
    sound.currentTime = 0;
    sound.play();
  };

  const handleKeyPress = useCallback(
    (e) => {
      if (e.keyCode === keyCode) {
        playSound(e);
      }
    },
    [keyCode]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  var myClasses = "drum-button " + id;
  return (
    <div>
      <div id={soundId} onClick={playSound} className={myClasses}>
        <p>{keyTrigger}</p>
        <audio id={keyTrigger} src={source} onKeyPress={handleKeyPress}></audio>
      </div>
    </div>
  );
};

export default DrumButton;
