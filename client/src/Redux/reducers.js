import { combineReducers } from "redux";
import initState from "./state";

const loggedIn = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return true;
    case "SIGN_OUT":
      return false;
    default:
      return state;
  }
};
//gets and saves user info
const user = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      let username = action.value;
      return username;
    default:
      return state;
  }
};
//gets recipient info
const recipient = (state = initState.recipient, action) => {
  switch (action.type) {
    case "GET_RECIPIENT":
      return action.value;
    default:
      return state;
  }
};
//get conversation messages for active conversation
const messages = (state = {}, action) => {
  switch (action.type) {
    case "GET_MESSAGES":
      return action.value;
    default:
      return state;
  }
};
//creates conversation docment in db
const createConversationDoc = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_CONVERSATION_DOC":
      return action.value;
    default:
      return state;
  }
};
//checks to see if sidebar is clicked
const toggleSideBar = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return action.value;
    default:
      return state;
  }
};

const contacts = (state = {}, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({
  loggedIn,
  user,
  recipient,
  messages,
  createConversationDoc,
  toggleSideBar,
  contacts,
});
