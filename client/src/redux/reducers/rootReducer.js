import { combineReducers } from "redux";
import developerReducer from "./developerReducer";
import authReducer from "./authReducer";

export default combineReducers({
  developer: developerReducer
  // auth: authReducer
});
