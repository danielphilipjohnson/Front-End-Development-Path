const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_VOLUME":
      return { ...state, volume: action.payload };
    case "CHANGE_DISPLAY":
      console.log("invoked");
      return { ...state, display: action.payload };
    case "LOADING":
      return { ...state, loading: true };
    default:
      throw new Error("no matching action type");
  }
};

export default reducer;
