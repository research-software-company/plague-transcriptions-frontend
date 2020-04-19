import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appHeader: {
    height: "20rem",
    backgroundColor: "#efefef",
    padding: "0.5rem",
    color: "#666",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <header className={classes.appHeader}>
        <Typography variant="h2">Days Of The Plague</Typography>
        <Typography variant="h5">
          Transcribing Jewish Plague-Related Manuscripts
        </Typography>
      </header>
    </React.Fragment>
  );
}

export default Header;
