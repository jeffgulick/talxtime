import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, List, Typography, Divider } from "@material-ui/core";
import logo from "../../images/logo.jpg";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
}));

const SideBarList = (props) => {
  const [loading, setLoading] = useState(true);
  const [lastConversations, setLastConversations] = useState()
  const classes = useStyles();
  let userId = props.user.userId;

  //populates a list of conversations on render, organized by username and 
  //the last message sent or recieved
  useEffect(() => {
    axios.post("/api/messages/conversations", { senderId: userId })
      .then(data => {
        setLastConversations(data.data)
        setLoading(false)
      } )
  }, [lastConversations]);

  //fires when conversation is selected. compares selected conversation to 
  //user in contacts. 
  const handleSelection = (info) => {
    axios.get("/api/users/contacts")
      .then(data => {
        let contacts = data.data
        let test = contacts.find((item) => info.conversationName == item.username);
        props.getRecipient(test);
      })
    //gets messages from conversations to display in chat container
    props.getMessages(info);
    props.toggleSideBar();
  };

  return (
    <List className={classes.chatList}>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {lastConversations.map((item, index) => (
            <div key={index}>
              <ListItem
                alignItems="flex-start"
                style={{ color: "white", paddingRight: "0" }}
              >
                <ListItemAvatar>
                  <Avatar alt={item.username} src={logo} />
                </ListItemAvatar>
                <ListItemText
                  onClick={() =>
                    handleSelection({
                      senderId: props.user.userId,
                      conversationName: item.conversationName,
                    })
                  }
                  primary={item.conversationName}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="Primary"
                      >
                        {item.message}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </div>
      )}
    </List>
  );
};
export default SideBarList;
