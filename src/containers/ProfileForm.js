import ProfileForm from '../components/ProfileForm';
import { updateNameAC } from '../actions/creators';
import {connect} from 'react-redux';

//returned obj's properties are passed down as prop={value}
const mapStateToProps = ( state ) => ({
        username: state.profileForm.values.username
})
const mapDispatchToProps = ( dispatch ) => ({
    
        updateName: (value) => {
            dispatch(updateNameAC(value))
        }
})
export const ProfileFormContainer = connect( mapStateToProps, mapDispatchToProps )( ProfileForm );
