import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Questions from "./Questions";
import { moveNextAction, movePrevAction } from '../customHook/fetchQuestionApi';
import { pushAnswer } from '../customHook/setResult';
import { Navigate } from 'react-router-dom';


const Quiz = () => {
  const [checkedIndex, setCheckedIndex] = useState(undefined);
  const { queue, trace } = useSelector(state => state.question);
  const { results } = useSelector(state => state.result);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(results);
  // });

  function handlePrevClick() {
    // console.log("on prev click");
    if (trace > 0) {
      //update the trace value accordingly we will get different question on prev btn.
      dispatch(movePrevAction());
    }

  }

  function handleNextClick() {
    // console.log("on next click");

    if (trace < queue.length) {
      //update the trace value accordingly we will get different question on next btn.
      dispatch(moveNextAction());
      if(results.length <= trace){
        dispatch(pushAnswer(checkedIndex));
      }
    }

    /** reset the value of the checked variable */
    setCheckedIndex(undefined);
  }

  function onChecked(index) {
    // console.log(index);
    setCheckedIndex(index);
  }

  /** after finishing the examination redirected to result table */

  if(results.length && results.length >= queue.length){
    return <Navigate to={"/result"} replace={true} />
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions */}

      <Questions onChecked={onChecked}></Questions>

      <div className='grid'>
        {trace > 0 ? <button className='prev-btn' onClick={handlePrevClick}>Prev</button> : <div></div>}
        <button className='next-btn' onClick={handleNextClick}>Next</button>
      </div>
    </div>
  )
}

export default Quiz