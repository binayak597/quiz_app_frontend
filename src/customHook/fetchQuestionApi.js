import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Action from "../redux/reducer/questionReducer";
import { getServerData } from "../utils/handleApi";

export const useFetchQuestionApi = () => {

    const [getData, setGetData] = useState({isLoading: false, apiData: [], serverError: null});
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                setGetData(prev => ({...prev, isLoading: true}));
                const {data: [{questions, answers}]} = await getServerData();
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading: false, apiData: {questions, answers}}));
                    /** dipatch an action */
                    dispatch(Action.startQuizAction({questions, answers}));
                }else{
                    throw new Error("No Question is available");
                }
               } catch (error) {
                setGetData( prev => ({...prev, isLoading: false, serverError: error}));
               }
            
            })();
    }, [dispatch]);

    return [getData, setGetData];
}

// increase the trace value by 1 when dispatch an action.
export const moveNextAction = () =>  async (dispatch) => {
    try {
        dispatch(Action.moveNextQuestion());
    } catch (error) {
        console.log(error);
    }
}

// decrease the trace value by 1 when dispatch an action.
export const movePrevAction = () =>  async (dispatch) => {
    try {
        dispatch(Action.movePrevQuestion());
    } catch (error) {
        console.log(error);
    }
}

    
