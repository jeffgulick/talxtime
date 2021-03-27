import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  CircularProgress,
} from "@material-ui/core";

const Contacts = (props) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  //gets available users to select
  useEffect(() => {
    axios
      .get("/api/users/contacts")
      .then((data) => {
        let usernames = data.data;
        usernames.forEach((element) => {
          setContacts((contacts) => [...contacts, element]);
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //selecting a user and sends info to redux
  const selectPerson = (user) => {
    let info = { senderId: "", recipientId: "" };
    info.recipientId = user._id;
    info.senderId = props.user.userId;
    props.getRecipient(user);
    props.closeModal();
  };

  return (
    <div>
      {loading ? (
        <CircularProgress style={{ marginLeft: "100pt" }} />
      ) : (
        <div>
          {contacts.map((name, index) => (
            <div key={index + 1}>
              <ListItem onClick={() => selectPerson(name)}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                {name.username}
              </ListItem>
              <Divider />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Contacts;
