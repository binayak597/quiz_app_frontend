import { createSlice } from "@reduxjs/toolkit";

const resultReducer = createSlice({
    name: "result",
    initialState: {
        userId: null,
        results: []
    },
    reducers: {
        setUserId: (state, action) => {
            return {
                ...state,
                userId: action.payload
            }
        },
        pushQuizResult: (state, action) => {
            state.results.push(action.payload);
        },

        updateQuizResult: (state, action) => {
            const {trace, checkedOption} = action.payload;
            state.results.fill(checkedOption, trace, trace+1)
        },
        resetResultAction: (state) => {
            return {
                userId: null,
                results: []
            }
        }
    }
})

export const { setUserId, pushQuizResult, resetResultAction, updateQuizResult } = resultReducer.actions;
export default resultReducer.reducer;