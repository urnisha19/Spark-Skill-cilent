import { createStore } from "redux";
import courseReducer from "../Reducer/courseReducer";
export const store = createStore(courseReducer);