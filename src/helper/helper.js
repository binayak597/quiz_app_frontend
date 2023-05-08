import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const attemptQuestions = (results) => {
    return results.filter(result => result !== undefined).length;
}

export const earnedPoints = (results, answers, points) => {
    return results.map((result, i ) => answers[i] === result).filter(value => value).map(i => i * points).reduce((acc, current) => acc + current, 0);
}

export const flagResult = (totalPoints, totalEarnedPoints) => {
    return totalPoints * 50 / 100 < totalEarnedPoints;
}

export const CheckedUser = ({children}) => {
    const auth = useSelector(state => state.result.userId);
    if(auth) return children;
    return <Navigate to ={"/"} replace={true}></Navigate>
}