import { useState, Fragment } from 'react';

function CounterWithHooks() {
    const [currentValue, setNewValue] = useState(0);
    const [firstName, setNewFirstName] = useState('Krut');

    const handleIncrement = () => {
        setNewValue(currentValue + 1);
    }

    const handleDecrement = () => {
        setNewValue(currentValue - 1);
    }

    const updateFirstName = () => {
        setNewFirstName('Kabir');
    }

    return (
        <div>
            <>
                <button onClick={handleIncrement}>+ Increment</button>
                <button onClick={handleDecrement}>- Decrement</button>
                <button onClick={updateFirstName}>Change First Name</button>
            </>

            <>
                <h4>Counter: {currentValue}</h4>
                <h4>First Name: {firstName}</h4>
            </>
        </div>
    )
}

export default CounterWithHooks;