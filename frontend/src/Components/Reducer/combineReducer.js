import currentSongReducer from "./currentSongReducer";
import filterTrackReducer from "./filteredTrackReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  currentSongReducer,
  filterTrackReducer
});
export default allReducers;