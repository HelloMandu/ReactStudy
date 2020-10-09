import {createAction, handleActions} from 'redux-actions';

const ONMODAL = 'modal/ON';
const OFFMODAL = 'modal/OFF';

export const onModal = createAction(ONMODAL, state => ({
    title: state.title, 
    description: state.description, 
    type: state.type
}));
export const offModal = createAction(OFFMODAL);

const initialState = {
    isOn: false,
    title: '',
    description: '',
    type: ''
}

const modal = handleActions(
    {
        [ONMODAL]: (state, action) => ({
            ...state,
            isOn: true,
            title: action.payload.title,
            description: action.payload.description,
            type: action.payload.type
        }),
        [OFFMODAL]: (state, action) => ({
            ...state,
            isOn: false
        })
    },
    initialState
)

export default modal;