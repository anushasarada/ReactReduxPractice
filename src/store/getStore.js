import counterReducer from '../reducers/CounterReducer'
import profileFormReducer from '../reducers/ProfileFormReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger1 from '../middleware/logger1'
import logger2 from '../middleware/logger2'

/* function combinedReducer(curState = { counter: undefined, profileForm: undefined }, action) {

    let newState;

    const newCounterState = counterReducer(curState.counter, action)
    const newProfileFormState = profileFormReducer(curState.profileForm, action)
    newState = {
        counter: newCounterState,
        profileForm: newProfileFormState
    }
    
    return newState;
} */

function getStore() {
    //createStore accepts only 1 reducers
    return createStore(
        /* combinedReducer */
        combineReducers(
            {
                counter: counterReducer,
                profileForm: profileFormReducer
            }
        ),
        applyMiddleware(logger1,logger2)
    )
}

export default getStore;