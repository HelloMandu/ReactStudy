import {createAction, handleActions} from 'redux-actions';

const GET_POST = 'sample/GET_POST';
const GET_USERS = 'sample/GET_USERS';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
    START_LOADING,
    requestType=>requestType
);

export const finishLoading = createAction(
    FINISH_LOADING,
    requestType=>requestType
);

const initialState = {
    [GET_POST]:null,
    [GET_USERS]:null
};

const loading = handleActions(
    {
        [START_LOADING]:(state, action) =>({
            ...state,
            [action.payload]: true
        }),
        [FINISH_LOADING]:(state, action) =>({
            ...state,
            [action.payload]: false
        })
    },
    initialState
);

export default loading;