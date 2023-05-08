import React from 'react'
import { getUserResult } from '../utils/handleApi.js'
import { useState } from 'react'
import { useEffect } from 'react';

const ResultTable = () => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        (async () => {
            const {data} = await getUserResult();
            setResult(data);
        })(); 
    }, [result]);
        

    return (
        <div className="table-margin">
            <table>
                <thead className='table-head'>
                    <tr>
                        <td>Name</td>
                        <td>Attempts</td>
                        <td>Earn Points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                {!result && <div>No Data Found</div>}
                {
                    result.map((value, index) => (
                    <tr className='table-body' key={index}>
                        <td>{value?.userName || ""}</td>
                        <td>{value?.attempts|| 0}</td>
                        <td>{value?.points || 0}</td>
                        <td>{value?.achieved || ""}</td>
                    </tr>
                ))

                }
                   
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable
