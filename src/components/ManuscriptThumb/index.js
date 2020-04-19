import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    thumb: {
      padding: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary,
      position: "relative",
      flexGrow: "0",
      flexBasis: "200px",
      width: "200px",
      minHeight: "300px",
      margin: "0.25rem",
      justifyContent: "start",
      alignItems: "center",
      backgroundColor: "var(--bg-lightest-gray)",
      display: "inline-block",
      verticalAlign: "top",
      border: "1px solid #333",
    },
  })
);

function ManuscriptThumb({ manuscript, transcribePage }) {
  const classes = useStyles();
  const iiif_url =
    manuscript.pages && manuscript.pages[0] && manuscript.pages[0].iiif_url;
  const thumbnailImgUrl =
    iiif_url && `${manuscript.pages[0].iiif_url}/full/,280/0/default.jpg`;
  const thumbnailImg = thumbnailImgUrl && (
    <img src={thumbnailImgUrl} style={{ width: "100%" }} />
  );
  return (
    <div className={classes.paper} onClick={transcribePage}>
      <div style={{ height: "280px" }}>{thumbnailImg}</div>
      <div
        style={{
          padding: "0.5rem",
          textAlign: "center",
          position: "absolute",
          color: "white",
          left: 0,
          right: 0,
          minHeight:'50px',
          bottom: "0px",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ fontWeight: "bold" }}>{manuscript.heb_name}</div>
        <div style={{fontSize:'12px'}}>{manuscript.notes}</div>
      </div>
    </div>
  );
}

export default ManuscriptThumb;
