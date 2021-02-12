const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_VOLUME":
      return { ...state, volume: action.payload };
    case "CHANGE_DISPLAY":
      return { ...state, display: action.payload };
    case "CHANGE_SOUNDBANK_NAME":
      return { ...state, currentSoundBanksName: action.payload };

    case "CHANGE_SOUND_FILE_NAME":
      return { ...state, soundFileName: action.payload };
    case "UPDATE_SOUND_BANK_NAME":
      return { ...state, display: action.payload };
    case "LOADING":
      return { ...state, loading: true };
    default:
      throw new Error("no matching action type");
  }
};

export default reducer;
