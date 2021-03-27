import { connect } from "react-redux";
import SideBarList from "../Components/Chat/SideBarList";
import {
  getMessages,
  toggleSideBar,
  getContacts,
  getRecipient
} from "../Redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    messages: state.messages,
    toggleSideBar: state.toggleSideBar,
    recipient: state.recipient,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: (info) => dispatch(getMessages(info)),
    toggleSideBar: () => dispatch(toggleSideBar()),
    getRecipient: (user) => dispatch(getRecipient(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideBarList);
