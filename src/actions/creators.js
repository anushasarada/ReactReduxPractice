import { INCREMENT, DECREMENT, UPDATE_NAME} from '../actions/constants';

//action creators
const incrementAC = () => ({
    type: INCREMENT
});
const decrementAC = () => ({
    type: DECREMENT
});
const updateNameAC = (value) => ({
    type: UPDATE_NAME,
    payload:{
        username: value
    }
});

export {
    incrementAC,
    decrementAC,
    updateNameAC
}