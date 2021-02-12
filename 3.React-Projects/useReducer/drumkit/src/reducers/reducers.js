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
      const availableSoundBanks = state.bankSets;

      let selectedSoundBank;
      for (let index = 0; index < availableSoundBanks.length; index++) {
        const soundBank = availableSoundBanks[index];

        if (soundBank.soundBanksName === action.payload) {
          selectedSoundBank = soundBank;
          break;
        }
      }
      return { ...state, currentSoundBank: selectedSoundBank };
    case "LOADING":
      return { ...state, loading: true };
    default:
      throw new Error("no matching action type");
  }
};

export default reducer;
