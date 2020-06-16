import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {  Link } from "react-router-dom";
import GoogleLoginButton from "../GoogleLoginButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#343a40",
    boxShadow: "none",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title}>
            <Link className={classes.link} to="/">
              ימי מגיפה{" "}
              <span style={{ color: "#888" }}>
              | כתבי-יד יהודיים העוסקים במגיפות
              </span>
            </Link>
          </Typography>
          <GoogleLoginButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
