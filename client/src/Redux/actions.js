import axios from "axios";

export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
export const getUser = (user) => {
  return {
    type: "GET_USER",
    value: user,
  };
};
export const getRecipient = (user) => {
  return {
    type: "GET_RECIPIENT",
    value: user,
  };
};
export const getMessages = (info) => {
  return (dispatch) => {
    axios
      .post("/api/messages/chats", info)
      .then (data =>{
        const action = {
          type: "GET_MESSAGES",
          value: data.data
        }
        dispatch(action);
      })
  }
}
export const getContacts = () => {
  return (dispatch) => {
    axios
      .get("/api/users/contacts")
      .then(data => {
        const action = {
          type: "GET_CONTACTS",
          value: data.data
        }
        dispatch(action);
      })
  }
}
export const toggleSideBar = () => {
  return {
    type: "TOGGLE_SIDEBAR",
    value: true
  }
}
