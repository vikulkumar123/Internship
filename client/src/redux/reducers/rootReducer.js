import { combineReducers } from "redux";
import developerReducer from "./developerReducer";

export default combineReducers({
  developer: developerReducer
  // auth: authReducer
});
