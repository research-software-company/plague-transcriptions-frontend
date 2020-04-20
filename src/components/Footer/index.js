import React from "react";
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
      <div style={{ borderTop: "1px solid #333", minHeight: "60px" }}>
        <div style={{ padding: "5px" , display:'flex'}}>
          <div style={{ borderLeft: "5px solid green", padding: "5px" }}>
          A joint project of <span>the Haifa University <a href="http://elijahlab.haifa.ac.il/index.php/en/" target="_blank">eLijah lab for Digital Humanities</a> </span> and <span>the <a href="https://www.researchsoftware.co.il" target="_blank">Research Software Company</a></span>
          </div>
          <div style={{ padding: "5px" }}>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
