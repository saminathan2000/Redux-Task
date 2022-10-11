export const increment = () => {
    return {
      type: "INCREMENT",
    };
  };
  
  export const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };
  export const setTrack = (tracks) => {
    return {
      type: "SET_TRACKS",
      payload:tracks
    };
  };
  export const reset = () => {
    return {
      type: "RESET",
    };
  };
  
  export const setSong = (song) => {
    return {
      type: "SET_SONG",
      payload:song
    };
  };
  
  export const logOut = () => {
    return {
      type: "LOG_OUT",
    };
  };