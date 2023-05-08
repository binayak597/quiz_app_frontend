import { combineReducers } from "redux";
import questionReducer from "./reducer/questionReducer";
import resultReducer from "./reducer/resultReducer";

const rootReducer = combineReducers({
    question: questionReducer,
    result: resultReducer
});

export default rootReducer;