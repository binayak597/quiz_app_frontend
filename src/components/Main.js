import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import "../styles/Main.css";
import { setUserId } from '../redux/reducer/resultReducer';

const Main = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    function handleChange(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value));
        }
    }

    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            <ol>
                <li>You will be asked 10 questions one after another.</li>
                <li>10 points is awarded for the correct answer.</li>
                <li>Each question has three options. You can choose only one option.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>
            <div>
                <div className='form'>
                <input className='userInfo' ref={inputRef} type="text" onChange = {handleChange} placeholder='Username*' />
                </div>
            <div className='start'>
                <Link className='btn' to="/quiz">Start Quiz</Link>
            </div>
        </div>
    </div >
            
        
    )
}

export default Main