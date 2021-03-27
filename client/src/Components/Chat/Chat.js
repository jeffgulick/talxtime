import React, { useState, useEffect } from "react";
import "./ChatStyles.css";
import MsgBar from "../../Containers/MsgBar";
import styled from "styled-components";
import useSocket from "use-socket.io-client";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

const InputArea = styled.input`
  position: static;
  top: 0;
  width: 87%;
  height: 45px;
  padding-left: 10px;
  font-size: 15px;
  background-color: #c1c1c1;
  border: 1px solid lightgray;
  outline: none;
  letter-spacing: 1px;
  line-height: 20px;
`;
const BubbleMe = styled.p`
  display: inline-block;
  position: relative;
  align-items: flex-end;
  text-align: center;
  font-size: 12pt;
  max-width: 85vh;
  height: auto;
  padding-left: 15pt;
  padding-right: 15pt;
  padding-top: 5pt;
  padding-bottom: 5pt;
  margin: 7pt;
  border: 2pt solid #2d88ff;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  color: #242526;
  background-color: #2d88ff;
  align-self: flex-end;
`;

const BubbleYou = styled.p`
  display: inline-block;
  position: relative;
  align-items: flex-start;
  text-align: center;
  font-size: 12pt;
  max-width: 85vh;
  padding-left: 15pt;
  padding-right: 15pt;
  padding-top: 5pt;
  padding-bottom: 5pt;
  margin: 10pt;
  border: 2pt solid #3a3b3c;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  color: white;
  background-color: #3a3b3c;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  page: {
    margin: 0,
    width: "100%",
    height: "500px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  messageContainer: {
    width: "auto",
    height: "100%",
    backgroundColor: "#242526",
    overflowY: "scroll",
  },
  messageContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "auto",
    height: "89%",
    marginBottom: 0,
    marginRight: "15pt",
    marginLeft: "15pt",
    color: "white",
    overflowY: "auto",
  },
  input: {
    marginTop: 0,
    width: "auto",
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    height: "45px",
    marginLeft: 0,
    marginBottom: "9pt",
    backgroundColor: "#FC4E50",
    color:"white",
    width:"70px",
    paddingLeft: "40px",
  },
}));

const Chat = (props) => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket] = useSocket("http://localhost:3001");
  let list = props.messages;
  let toggle = props.toggleSideBar;
  socket.connect();

  let user = props.user;
  let results;

  //recieving message from server
  //recieves on update of results from server
  useEffect(() => {
    socket.on("Output Chat Message", (data) => {
      results = data[0];
      setMessages((messages) => [...messages, results]);
    });
    return () => { 
      socket.removeListener("Output Chat Message");
    };
  }, [results]);

  //displays old messages from database by to and from 
  //returns into messages state
  useEffect(() => {
    if (toggle) {
      setMessages("");
      let userArray = list.map((item) => {
        let userObj = { message: "", username: "" };
        userObj.username = item.sender;
        userObj.message = item.message;
        return userObj;
      });
      setMessages(userArray);
    }
  }, [list]);

  //sending message to server
  const handleSubmit = (event) => {
    event.preventDefault();
    let chatMessage = input;
    let senderId = props.user.userId;
    let recipientId = props.recipient._id;
    let username = props.user.username;

    socket.emit("Input Chat Message", {
      chatMessage,
      senderId,
      recipientId,
      username,
    });
    setInput("");
  };

  return (
    <div className={classes.page}>
      <MsgBar />
      <div className={classes.messageContainer}>
        <div className={classes.messageContent}>
          {messages.map((item, index) => (
            <div
              className={`${
                item.username == user.username
                  ? "align-self-end"
                  : "align-self-start"
              }`}
              key={index}
            >
              {item.username == user.username ? (
                <BubbleMe>{item.message}</BubbleMe>
              ) : (
                <div>
                  <p style={{ marginLeft: "12pt", marginBottom: "0" }}>
                    {props.recipient.username}
                  </p>
                  <BubbleYou>{item.message}</BubbleYou>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={classes.input} style={{ position: "sticky" }}>
          <form onSubmit={handleSubmit} style={{ marginLeft: "15pt" }}>
            <InputArea
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onSubmit={handleSubmit}
            />

            <Button
              variant="contained"
              className={classes.button}
              endIcon={<Icon />}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Chat;
