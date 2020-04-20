import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridPart: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontSize: "1rem",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Grid container>
        <Grid item sm={6} className={classes.gridPart}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Grid>
        <Grid item sm={6} className={classes.gridPart}>
        <Button
            href={`/manuscripts`}
            variant="contained"

            className="CheckButton"
            style={{ width: "100%" }}
          >Explore manuscripts</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
