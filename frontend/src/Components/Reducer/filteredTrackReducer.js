const filterTrackReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_TRACKS":
        return action.payload;
      case "RESET":
        return (state = []);
      default:
        return state;
    }
  };
  export default filterTrackReducer;