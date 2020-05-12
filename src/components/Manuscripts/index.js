import React from "react";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ManuscriptThumb from "../ManuscriptThumb";
import { observer } from "mobx-react";
import store from "../../Store";
import api from "../../api";
import Navbar from "../Navbar";
const Manuscripts = withRouter(
  observer(
    class Manuscripts extends React.Component {
      constructor() {
        super();
      }

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
                  אופני התגובות והתמודדות האנושיים עם מגפות הם רבים ומגוונים:
                  בפעולה רפואית וחברתית, בתפילה, במאגיה. יש והמגפות מעוררות
                  שדים: האשמות, תיאוריות קונספירציה ואוירת סוף העולם, ויש שהן
                  מעוררות ערבות הדדית ואחריות חברתית. אנו מאמינים שהלימוד והעיון
                  בתגובות אנושיות למגפות מן העבר צפוי להועיל גם בהווה.
                </div>
                <div style={{ padding: "5px" }}>
                  בימי מגיפה אספנו לפניכם מגוון כתבי יד יהודיים המדגימים את דרכי
                  ההתמודדות השונות עם מגפות. כל שעליכם לעשות הוא לבחור בכתב יד,
                  ולסייע בהנגשתו על ידי הקלדת התכנים. כל תרומה עוזרת – אם אינכם
                  מצליחים לקרוא אות, מילה או שורה – כתבו במקומה סימן שאלה.
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
