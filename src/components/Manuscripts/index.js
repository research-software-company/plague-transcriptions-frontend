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
<div
            
            >
              {thumbs}
            </div> 
            </React.Fragment>
          
        );
      }
    }
  )
);

export default Manuscripts;
