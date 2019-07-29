import { UPDATE_NAME } from '../actions/constants'

//define reducers
const profileFormReducer = (curState = { values: { username: '' } }, action) => {
    let newState;

    switch (action.type) {
        
        case UPDATE_NAME:
            newState = {
                values: {
                    ...curState.values,
                    username: action.payload.username
                }
            };
            break;

        default: 
            newState = curState; 
            break;
    }

    return newState;
}
export default profileFormReducer;