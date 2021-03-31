import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
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

const validate = values => {
  const errors = {};
   if (!values.userName) {
     errors.userName = 'Required';
   } else if (values.userName.length > 15) {
     errors.firstName = 'Must be 15 characters or less';
   }
   return errors
}

export default function Register() {
  const classes = useStyles();
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      axios
        .post("/api/users/register", {
          username: values.userName,
          password: values.password,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      // history.push("/");
    },
  });

  return (
    <div className={classes.container}>
      <Card elevation={8} className={classes.root}>
        <Typography variant="h4" className={classes.typo}>
          Register
        </Typography>
        <CardContent className={classes.content}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              className={classes.TextField}
              id="userName"
              label="Username *"
              name="userName"
              size="small"
              value={formik.values.userName}
              onChange={formik.handleChange}
            />
            {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
            <br />
            <TextField
              className={classes.TextField}
              id="password"
              name="password"
              label="Password *"
              size="small"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
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
