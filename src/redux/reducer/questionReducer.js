import { createSlice } from "@reduxjs/toolkit";

const questionReducer = createSlice({
    name: "question",
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },

    reducers: {
        startQuizAction: (state, action) => {
            const {questions, answers} = action.payload;
            return {
                ...state,
                queue: questions,
                answers
            }
        },
        moveNextQuestion: (state) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        movePrevQuestion: (state) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        },
        resetQuestionAction: (state) => {
            return {
                queue: [],
                answers: [],
                trace: 0
            }
        }
    }

})

export const { startQuizAction, moveNextQuestion, movePrevQuestion, resetQuestionAction } = questionReducer.actions;
export default questionReducer.reducer;