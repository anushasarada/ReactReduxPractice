import Counter from '../components/Counter';
import { incrementAC, decrementAC } from '../actions/creators';
import {connect} from 'react-redux'

//returned obj's properties are passed down as prop={value}
const mapStateToProps = ( state ) => {
    return {
        count: state.counter.count
    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        increment: () => {
            dispatch(incrementAC())
        },
        decrement: () => {
            dispatch(decrementAC())
        }
    }
}
export const CounterContainer = connect( mapStateToProps, mapDispatchToProps )( Counter );