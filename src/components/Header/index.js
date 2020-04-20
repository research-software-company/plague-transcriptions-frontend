import React from "react";
import HeaderCarousel from "../HeaderCarousel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appHeader: {
    height: "20rem",
    backgroundColor: "#efefef",
    color: "#666",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div style={{ padding: "5px" }}>
        <div style={{ borderLeft: "5px solid green", padding: "5px" }}>
          <h2>
            Plague days{" "}
            <span style={{ color: "#888" }}>
            | Historical Jewish Manuscripts
            </span>
          </h2>
        </div>
      </div>
      <header className={classes.appHeader}>
        <HeaderCarousel />
      </header>
    </React.Fragment>
  );
}

export default Header;
