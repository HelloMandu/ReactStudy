import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREAMENT':
            return { value: state.value + 1 };
        case 'DECREAMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    return (
        <div>
            <p>
                <b>{state.value}</b>
            </p>
            <button onClick = {() => dispatch({type: 'INCREAMENT'})}>+1</button>
            <button onClick = {() => dispatch({type: 'DECREAMENT'})}>-1</button>
        </div>
    )
}

export default Counter;