import { INCREMENT, DECREMENT } from '../actions/constants'

//define reducers
const counterReducer = (curState = { count: 0 }, action) => {
    let newState;

    switch (action.type) {
        case INCREMENT: newState = { count: curState.count + 1 }; break;
        case DECREMENT: newState = { count: curState.count - 1 }; break;
        default: newState = curState; break;
    }

    return newState;
}
export default counterReducer;