import React from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/Result.css"
import * as Actions from "../redux/reducer/questionReducer";
import { resetResultAction } from "../redux/reducer/resultReducer"
import { attemptQuestions, earnedPoints, flagResult } from '../helper/helper';
import { usePublishResult } from '../customHook/setResult';

const Result = () => {

  const { question: { queue, answers }, result: { userId, results } } = useSelector(state => state);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(results);
  //   console.log(totalEarnedPoints);
  // })

  const totalPoints = queue.length * 10;
  const totalQuestions = queue.length;
  const totalAttempts = attemptQuestions(results);
  const totalEarnedPoints = earnedPoints(results, answers, 10);
  const flag = flagResult(totalPoints, totalEarnedPoints);

  const resultData = {
    userName: userId,
    result: results,
    attempts: totalAttempts,
    points: totalEarnedPoints,
    achieved: flag ? "Passed" : "Failed"
  }

  usePublishResult(resultData);

  function handleClick() {
    dispatch(Actions.resetQuestionAction());
    dispatch(resetResultAction());
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <div className='flex'>

        <div className='flex-item'>
          <span>UserName :</span>
          <span>{userId}</span>
        </div>

        <div className='flex-item'>
          <span>Total Quiz Points :</span>
          <span>{totalPoints}</span>
        </div>

        <div className='flex-item'><span>Total Questions :</span>
          <span>{totalQuestions}</span>
        </div>

        <div className='flex-item'><span>Total Attempts :</span>
          <span>{totalAttempts}</span>
        </div>

        <div className='flex-item'>
          <span>Total Earned Points :</span>
          <span>{totalEarnedPoints}</span>
        </div>

        <div className='flex-item'>
          <span>Result :</span>
          <span style={{color: `${flag ? "#2aff95" : "#ff2a66"}`}}>{flag ? "Passed" : "Failed"}</span>
        </div>

        <div className='start'>
          <Link className='btn' to="/" onClick={handleClick}>Restart</Link>
        </div>

      </div>

      {/* display result table */}
      <ResultTable></ResultTable>
        
    </div>
  )
}

export default Result