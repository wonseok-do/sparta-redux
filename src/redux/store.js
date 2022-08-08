import { createStore, combineReducers } from "redux";
import cat from "./modules/cat";

const rootReducer = combineReducers({ cat });

const store = createStore(rootReducer);

export default store;
