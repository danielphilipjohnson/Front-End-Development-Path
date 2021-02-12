import React, { useState } from "react";
import { useGlobalContext } from "./context/context";

import "./App.css";
import "./drum.css";
import Display from "./components/drum-machine/display/display";
import PadBank from "./components/drum-machine/pad-bank/PadBank";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const { loading, bankSets } = useGlobalContext();
  // const [bankSets, setBankSets] = useState(SoundBanks);
  const [currentBankSet, setCurrentBankSet] = useState(bankSets[0]);

  const [currentSoundBanksName, setCurrentSoundBanksName] = useState();
  const [display, setDisplay] = useState("-");

  const changeCurrentSoundBankName = (SoundBankName) => {
    setCurrentSoundBanksName(SoundBankName);
  };
  const changeSoundBanks = (newSoundBankName) => {
    console.log(newSoundBankName);
    const soundBank = retrieveSoundBankViaName(newSoundBankName);
    setCurrentBankSet(soundBank);
  };
  const updateSoundBankAndDisplay = (newSoundBankName) => {
    console.log("updateSoundBankAndDisplay");
    changeCurrentSoundBankName(newSoundBankName);
    changeSoundBanks(newSoundBankName);
  };

  const retrieveSoundBankViaName = (name) => {
    // retrieve all sound banks
    const availableSoundBanks = bankSets;

    let selectedSoundBank;

    for (let index = 0; index < availableSoundBanks.length; index++) {
      const soundBank = availableSoundBanks[index];

      if (soundBank.soundBanksName === name) {
        console.log("true");
        selectedSoundBank = soundBank;
        break;
      }
    }

    return selectedSoundBank;
  };

  const updateDisplaySoundFileName = (name) => {
    setDisplay(name);
  };

  return (
    <div id="drum-machine" className="App">
      <Navbar />
      <main>
        <Sidebar />
        <div className="drumkit">
          <div className="control-panel">
            <div className="controls">
              <div className="btn-group">
                <button className="btn-drum btn-drum--active">Record</button>
                <button className="btn-drum btn-drum">Edit</button>
              </div>
              <Display
                text={display}
                updateSoundBankAndDisplay={updateSoundBankAndDisplay}
                bankSets={bankSets}
              />
            </div>
            <PadBank currentsoundBanksName={currentSoundBanksName} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
