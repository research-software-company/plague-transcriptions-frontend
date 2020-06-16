import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Grid from "@material-ui/core/Grid";
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
          במשך כל הדורות התמודדה האנושות עם מגפות, ורושמה של התמודדות זו ניכר גם
          בתרבות היהודית. ימי מגיפה מזמין אתכם לסייע בהנגשת כתבי-יד יהודיים
          העוסקים במגיפות.
        </Grid>
        <Grid item sm={6} className={classes.gridPart}>
          <Button
            href={`/manuscripts`}
            variant="contained"
            className="CheckButton"
            style={{ width: "100%" }}
          >
            ספריית כתבי היד
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
