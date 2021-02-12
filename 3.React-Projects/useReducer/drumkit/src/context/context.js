import React, { useContext, useReducer, useEffect } from "react";

import reducer from "../reducers/reducers";

import SoundBanks from "../data/soundBank";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  display: "-",
  volume: 0.5,
  bankSets: SoundBanks,
  currentSoundBank: SoundBanks[0],
  currentSoundBanksName: "",
  soundFileName: "--",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeVolume = (volume) => {
    dispatch({ type: "CHANGE_VOLUME", payload: volume });
  };

  const changeCurrentSoundBankName = (SoundBankName) => {
    dispatch({ type: "CHANGE_SOUNDBANK_NAME", payload: SoundBankName });
  };

  const updateDisplaySoundFileName = (name) => {
    console.log("dispatched filename");
    dispatch({ type: "CHANGE_SOUND_FILE_NAME", payload: name });
  };
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
  };

  const updateSoundBankAndDisplay = (soundSetName) => {
    console.log(soundSetName);
    // changeCurrentSoundBankName(newSoundBankName)

    dispatch({ type: "UPDATE_SOUND_BANK_NAME", payload: soundSetName });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // useEffect(() => {
  //   dispatch({ type: "GET_TOTAL" });
  // }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateDisplaySoundFileName,
        updateSoundBankAndDisplay,
        changeVolume,
        changeCurrentSoundBankName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
