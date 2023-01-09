import { useState, useEffect } from 'react'
import Users from './Users';

function useEffectDemo() {

    const [count, setCount] = useState(0);

    const [count1, setCount1] = useState(0);

    useEffect(() => {
        console.log(`you have clicked the button ${count} times.`);
    }, [count]);

    useEffect(() => {
        console.log(`you have clicked the count 1 button ${count1} times.`);
    }, [count1]);

    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={() => setCount(count + 1)}>Click Me !!!</button>
            <button type="button" className="btn btn-dark ml-2" onClick={() => setCount1(count1 + 1)}>Click Me Please !!!</button>
            <Users />
        </div>
    )
}

export default useEffectDemo;