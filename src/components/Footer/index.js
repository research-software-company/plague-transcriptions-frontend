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
          <div style={{ borderRight: "5px solid green", padding: "5px" }}>

          פרויקט משותף ל <span><a href="http://elijahlab.haifa.ac.il/index.php/en/" target="_blank">מעבדת אליהו למדעי הרוח הדיגיטליים</a> באוניברסיטת חיפה </span> ול<span><a href="https://www.researchsoftware.co.il" target="_blank">חברה לתוכנה מחקרית</a></span>
          </div>
          <div style={{ padding: "5px" }}>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
