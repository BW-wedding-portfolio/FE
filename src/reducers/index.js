import { registerReducer } from "./registerReducer";
import { loginReducer } from "./logInReducer";
import { cardReducer } from "./cardReducer";
import { combineReducers } from "redux";

export default combineReducers({
  registerReducer,
  loginReducer,
  cardReducer
});
