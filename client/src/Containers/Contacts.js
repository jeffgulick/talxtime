import { connect } from "react-redux";
import Contacts from "../Components/Chat/Contacts";
import { getRecipient } from "../Redux/actions";

const mapStateToProps = (state) => {
  return {
    recipient: state.recipient,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipient: (user) => dispatch(getRecipient(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
