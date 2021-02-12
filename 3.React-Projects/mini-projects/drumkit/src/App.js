import React, { Component, useState } from "react";
import "./App.css";
import "./drum.css";
import Display from "./components/drum-machine/display/display";
import PadBank from "./components/drum-machine/pad-bank/PadBank";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

import SoundBanks from "./data/soundBank";

function Ap() {
  const [bankSets, setBankSets] = useState(SoundBanks);
  const [currentBankSet, setCurrentBankSet] = useState(bankSets[0]);
  const [currentSoundBanksName, setCurrentSoundBanksName] = useState("default");
  const [display, setDisplay] = useState("-");
  const [audioVolume, setAudioVolume] = useState(0.5);

  const changeCurrentSoundBankName = (SoundBankName) => {
    setCurrentSoundBanksName(SoundBankName);
  };
  const changeSoundBanks = (newSoundBankName) => {
    const soundBank = retrieveSoundBankViaName(newSoundBankName);
    setCurrentBankSet(soundBank);
  };
  const updateSoundBankAndDisplay = (newSoundBankName) => {
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
  const changeVolume = (volume) => {
    setAudioVolume(volume);
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
                changeVolume={changeVolume}
              />
            </div>
            <PadBank
              audioVolume={audioVolume}
              currentsoundBanksName={currentSoundBanksName}
              currentBankSet={currentBankSet}
              updateDisplaySoundFileName={updateDisplaySoundFileName}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankSets: SoundBanks,
      currentBankSet: SoundBanks[0],
      display: "-",
      currentsoundBanksName: "default",
      audioVolume: 0.5,
    };

    this.changeVolume = this.changeVolume.bind(this);

    this.updateDisplaySoundFileName = this.updateDisplaySoundFileName.bind(
      this
    );

    this.updateSoundBankAndDisplay = this.updateSoundBankAndDisplay.bind(this);
  }

  changeCurrentSoundBankName(SoundBankName) {
    this.setState({ currentsoundBanksName: SoundBankName });
  }

  // Requires testing function does three things
  changeSoundBanks(newSoundBankName) {
    const soundBank = this.retrieveSoundBankViaName(newSoundBankName);

    this.setState({ currentBankSet: soundBank });
  }

  changeVolume(volume) {
    this.setState({ audioVolume: volume });
  }

  retrieveSoundBankViaName(name) {
    // retrieve all sound banks
    const availableSoundBanks = this.state.bankSets;

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
  }

  updateDisplaySoundFileName(name) {
    this.setState({ display: name });
  }
  updateSoundBankAndDisplay(newSoundBankName) {
    this.changeCurrentSoundBankName(newSoundBankName);
    this.changeSoundBanks(newSoundBankName);
  }

  render() {
    return (
      <div id="drum-machine" className="App">
        <Ap />
      </div>
    );
  }
}

export default App;
