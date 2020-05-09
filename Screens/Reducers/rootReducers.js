import { combineReducers } from "redux";
import CartReducer from "./Cart";
const rootReducers = combineReducers({
    Cart:CartReducer
})
export default rootReducers;