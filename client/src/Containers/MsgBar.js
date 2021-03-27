import MsgBar from '../Components/Chat/MsgBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        recipient: state.recipient,
    }
}

export default connect(mapStateToProps)(MsgBar);