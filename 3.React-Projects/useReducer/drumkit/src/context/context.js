import React, { useContext, useReducer, useEffect } from "react";

import reducer from "../reducers/reducers";

import SoundBanks from "../data/soundBank";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  display: "-",
  volume: 0.5,
  bankSets: SoundBanks,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeVolume = (volume) => {
    dispatch({ type: "CHANGE_VOLUME", payload: volume });
  };

  const updateDisplaySoundFileName = (name) => {
    dispatch({ type: "CHANGE_DISPLAY", payload: name });
  };
  const fetchData = async () => {
    dispatch({ type: "LOADING" });

    // dispatch({ type: "DISPLAY_ITEMS", payload: cart });
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
        changeVolume,
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
