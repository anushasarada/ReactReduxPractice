import counterReducer from '../reducers/CounterReducer'
import profileFormReducer from '../reducers/ProfileFormReducer'
import { createStore } from 'redux';

function combinedReducer(curState = { counter: undefined, profileForm: undefined }, action) {

    let newState;

    const newCounterState = counterReducer(curState.counter, action)
    const newProfileFormState = profileFormReducer(curState.profileForm, action)
    newState = {
        counter: newCounterState,
        profileForm: newProfileFormState
    }
    
    return newState;
}

function getStore() {
    //createStore accepts only 1 reducers
    return createStore(
        combinedReducer
    )
}

export default getStore;