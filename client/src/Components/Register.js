import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    transform: "scale(1)",
    height: "345px",
    width: "345px",
    marginTop: "30pt",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  action: {
    justifyContent: "center",
  },
  TextField: {
    width: "30ch",
    marginTop: "10px",
  },
  button: {
    width: "35ch",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "35pt",
    backgroundColor: "#FC4E50",
  },
  typo: {
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    color: "#333333",
  },
});

export default function Register() {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/users/register", {
        username: userName,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    history.push("/");
    setUserName("");
    setPassword("");
  };

  return (
    <div className={classes.container}>
      <Card elevation={8} className={classes.root}>
        <Typography variant="h4" className={classes.typo}>
          Register
        </Typography>
        <CardContent className={classes.content}>
          <form onSubmit={handleSubmit}>
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Username *"
              size="small"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <br />
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Password *"
              size="small"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </form>
        </CardContent>
        {/* <CardActions className={classes.action}>
              <Link to= "/register" >
                <a href>Sign Up</a>
              </Link>
              <Link to= "/register" >
                <a href>Something Else</a>
              </Link>
            </CardActions> */}
      </Card>
    </div>
  );
}
