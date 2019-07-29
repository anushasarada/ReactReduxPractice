import { INCREMENT, DECREMENT } from '../actions/constants'

//define reducers
//reducers must be puure func
//must not use any global variables
//most not modify any argument: no changes to action or state
//must return same outputs for same intputs
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