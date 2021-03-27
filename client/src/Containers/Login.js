import Login from '../Components/Login';
import { connect } from 'react-redux';
import { signIn, getUser } from '../Redux/actions';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => dispatch(signIn()),
        getUser: (user) => dispatch(getUser(user)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)