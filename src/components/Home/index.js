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
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח
          איבן איף, ברומץ כלרשט מיחוצים. קלאצי להאמית קרהשק סכעיט דז מא, מנכם
          למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק
          ליץ, ושבעגט. לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח
          לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. גולר מונפרר סוברט לורם שבצק
          יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו
          חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה
          ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק..
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
