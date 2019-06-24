import { combineReducers } from "redux";
import developerReducer from "./developerReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
export default combineReducers({
  developer: developerReducer,
  error: errorReducer,
  auth: authReducer
});
