import { connect } from "react-redux";
import Chat from '../Components/Chat/Chat';


const mapStateToProps = state => {
    return {
        user: state.user,
        recipient: state.recipient,
        messages: state.messages,
        toggleSideBar: state.toggleSideBar,
        createConversationDoc: state.createConversationDoc
    }
  }
  
  export default connect(mapStateToProps)(Chat);