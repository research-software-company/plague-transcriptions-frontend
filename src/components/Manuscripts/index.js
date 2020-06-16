import React from "react";
import { withRouter } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
import ManuscriptThumb from "../ManuscriptThumb";
import { observer } from "mobx-react";
import store from "../../Store";
import api from "../../api";
import Navbar from "../Navbar";
const Manuscripts = withRouter(
  observer(
    class Manuscripts extends React.Component {
      transcribePage(manuscript) {
        const pageId = manuscript.pages[0].id;
        this.props.history.push(`/transcribe/${pageId}`);
      }

      componentDidMount() {
        api.populateManuscripts();
      }

      render() {
        const thumbs = store.state.manuscripts.map((m, i) => {
          return (
            <ManuscriptThumb
              manuscript={m}
              key={i}
              transcribePage={function () {
                this.transcribePage(m);
              }.bind(this)}
            />
          );
        });

        return (
          <React.Fragment>
            <Navbar />
            <div>
              <h2>כתבי היד</h2>
              <div style={{ display: "flex" }}>
                <div style={{ padding: "5px" }}>
                  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע
                  צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי להאמית קרהשק
                  סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם
                  שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. לפרומי בלוף קינץ תתיח
                  לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה
                  שיצמה ברורק. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק
                  ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך
                  וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו
                  נמרגי שהכים תוק, הדש שנרא התידם הכייר וק..
                </div>
                <div style={{ padding: "5px" }}>
                  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע
                  צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי להאמית קרהשק
                  סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם
                  שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. לפרומי בלוף קינץ תתיח
                  לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה
                  שיצמה ברורק. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק
                  ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך
                  וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו
                  נמרגי שהכים תוק, הדש שנרא התידם הכייר וק..
                </div>
              </div>
            </div>
            <div>{thumbs}</div>
          </React.Fragment>
        );
      }
    }
  )
);

export default Manuscripts;
