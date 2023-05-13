import React, { useState, useEffect } from 'react';
import { useFetchQuestionApi } from '../customHook/fetchQuestionApi';
import { useSelector, useDispatch } from 'react-redux';
import { updateResult } from '../customHook/setResult';

const Questions = ({ onChecked }) => {
    const [checkedOption, setCheckedOption] = useState(undefined);
    const [{ isLoading, serverError }] = useFetchQuestionApi();
    const { trace } = useSelector(state => state.question);
    const result = useSelector(state => state.result.results);
    const questions = useSelector(state => state.question.queue[state.question.trace]);
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log({trace, checkedOption});
        dispatch(updateResult({ trace, checkedOption }));
        // eslint-disable-next-line
    },[checkedOption]);

    // useEffect(() => {
    //     console.log(apiData);
    // });

    function handleChange(index) {
        // console.log(index);
        onChecked(index);
        setCheckedOption(index);
        dispatch(updateResult({ trace, checkedOption }));
    }

    if (isLoading) return <h3 className='text-light'>isLoading</h3>;
    if (serverError) return <h3 className='text-light'>{serverError || 'Unknown Error'}</h3>;

    return (
        <div className='questions'>
            <h2 className='text-light'>{questions?.question}</h2>

            <div>
                <ul key={questions?.id}>
                 {
                    questions?.options.map((option, index) => (
                        <li key={index}>
                            <input type="radio"
                            name="q"
                            value={false}
                            id={`op-${index}`}
                            onChange= {() => handleChange(index)} 

                            />

                            <label className="text-primary" htmlFor={`op-${index}`}>{option}</label>
                            <div className={`check ${result[trace] === index ? 'checked' : ''}`}></div>
                        </li>
                    ))
                 }
                </ul>
            </div>
        </div>
    )
}

export default Questions

