import { postResultData } from "../utils/handleApi";
import * as Action from '../redux/reducer/resultReducer';

export const pushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushQuizResult(result))
    } catch (error) {
        console.log(error)
    }
}
export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateQuizResult(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResult = (resultData) => {
const {userName, result} = resultData;
(async () => {
    try {
        if(!userName && result !== []) throw new Error("Couldn't find the result");
        await postResultData(resultData);
    } catch (error) {
        console.log(error);
    }
})();
}