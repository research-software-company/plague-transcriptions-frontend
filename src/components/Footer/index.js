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

function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div style={{borderTop:'1px solid #333', minHeight:'60px'}}>
            
          
      </div>
    </React.Fragment>
  );
}

export default Footer;
