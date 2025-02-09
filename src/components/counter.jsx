import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount, resetCounter, updateCounterAsync } from '../redux/features/counterSlice';
import loader from '../assets/loader.gif';
import '../style/loader.css';

const Counter = () => {
    const [incrementByAmountVal, setIncrementByAmountVal] = React.useState(0);
    const [decrementByAmountVal, setDecrementByAmountVal] = React.useState(0);
    const { value, loading } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment());
    };

    const decrementHandler = () => {
        dispatch(decrement());
    };

    const increamentByAmountHandler = () => {
        dispatch(incrementByAmount(incrementByAmountVal));
    };
    const decrementByAmountHandler = () => {
        dispatch(decrementByAmount(decrementByAmountVal));
    };
    const resetHandler = () => {    
        dispatch(resetCounter());
    }
    const increamentByAmountAsyncHandler = () => {
        dispatch(updateCounterAsync(incrementByAmountVal));
    };
    const decrementByAmountAsyncHandler = () => {
        dispatch(updateCounterAsync(-decrementByAmountVal));
    };

    return (
        <div className={loading ? 'disable-interactions' : ''}>
            <h1>Counter: {value}</h1>
            {loading && (
                <div className="loader-overlay">
                    <img src={loader} alt="Loading..." />
                </div>
            )}
            <button onClick={resetHandler}>Reset</button>&nbsp;
            <button onClick={incrementHandler}>Increment</button>&nbsp;
            <button onClick={decrementHandler}>Decrement</button>
            <br />
            <input type="number"  placeholder="Enter a number" onChange={(e) => setIncrementByAmountVal(parseInt(e.target.value))}/> &nbsp;
            <button onClick={increamentByAmountHandler}>Increment by amount</button>&nbsp;
            <button onClick={increamentByAmountAsyncHandler}>Thunk Increment by amount</button>
            <br />
            <input type="number" placeholder="Enter a number" onChange={(e) => setDecrementByAmountVal(parseInt(e.target.value))} /> &nbsp;
            <button onClick={decrementByAmountHandler}>Decrement by amount</button>&nbsp;
            <button onClick={decrementByAmountAsyncHandler}>Thunk Decrement by amount</button>
        </div>
    );
};

export default Counter;