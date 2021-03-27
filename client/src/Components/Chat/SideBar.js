import React, { useState } from "react";
import "./SideBar.css";
import Contacts from "../../Containers/Contacts";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  List,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SideBarList from "../../Containers/SideBarList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#18191A",
  },
  toolBar: {
    paddingLeft: "15pt",
    width: "100%",
  },
  chatListContainer: {
    backgroundColor: "#18191A",
    paddingLeft: "5pt",
    height: "500px",
    overflow: "scroll",
  },
  chatList: {
    marginLeft: "5pt",
    paddingLeft: "5pt",
  },
  title: {
    marginLeft: "17pt",
  },
  addIcon: {
    fontSize: "20pt",
    textAlign: "end",
    color: "white",
  },
  inline: {
    display: "inline",
  },
  dialog: {
    fontWeight: "bold",
  },
}));

const SideBar = () => {
  const [open, setOpen] = useState(false);

  //handles model
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div style={{ width: "350px", height: "auto" }}>
      <AppBar className={classes.bar} position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="user"
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </IconButton>
          <h4 className={classes.title}>Chats</h4>
          <IconButton
            onClick={handleClickOpen}
            edge="end"
            style={{
              marginLeft: "75pt",
              paddingRight: "5pt",
              paddingLeft: "20pt",
            }}
          >
            <AddBoxIcon className={classes.addIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.chatListContainer}>
        <SideBarList />
      </div>
      <Dialog
        className={classes.dialog}
        BackdropProps
        open={open}
        disableBackdropClick
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Users</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dialog}>
            Who who you would like to chat with?
          </DialogContentText>
          <List>
            <Contacts closeModal={handleClose} />
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SideBar;
