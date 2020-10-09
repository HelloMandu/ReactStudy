import {useReducer, useCallback} from 'react';

function reducer(state, action){
    return{
        ...state,
        [action.name]: action.value
    }
}

export default function useInput(initialForm){
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback(e =>{
        dispatch(e.target);
    }, []);
    return [state, onChange];
}