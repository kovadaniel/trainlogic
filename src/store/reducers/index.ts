import { combineReducers } from "redux";
import trainReducer from "./trainReducer";

export const RootReducer = combineReducers({
    train: trainReducer,
});