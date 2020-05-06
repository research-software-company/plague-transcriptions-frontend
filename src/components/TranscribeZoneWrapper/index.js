import React from "react";
import { TextareaAutosize, Button } from "@material-ui/core";
import TranscribeZone from "../TranscribeZone";
import api from "../../api";
import store from "../../Store";

const TranscribeZoneWrapper = class TranscribeZoneWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      num_pages: null,
      transcription1: null,
      transcription2: null,
      notes1: null,
      notes2: null,
    };
  }

  updateTranscription(value, page) {
    this.setState({ [`transcription${page}`]: value });
  }

  updateNotes(value, page) {
    this.setState({ [`notes${page}`]: value });
  }

  goToNextPage() {
    store.state.current_page_id = +store.state.current_page_id + 1;
  }

  goToPrevPage() {
    store.state.current_page_id = +store.state.current_page_id - 1;
  }

  addTranscriptionZone() {
    this.setState({ num_pages: 2 });
  }

  sendTranscription() {
    const self = this;
    api
      .sendTranscription({
        transcriptionId: this.props.item.id,
        text1: this.state.transcription1,
        text2: this.state.transcription2,
        notes1: this.state.notes1,
        notes2: this.state.notes2,
        num_pages: this.state.num_pages,
      })
      .then((res) => {
        self.goToNextPage.call(self);
      });
  }

  componentWillMount() {
    this.setState({ num_pages: this.props.item.num_pages });
  }

  render() {
    let transcriptionZones = [];
    const num_pages = this.state.num_pages || 1;
    for (let i = 0; i < num_pages; i++) {
      transcriptionZones.push(
        <TranscribeZone
          key={i + 1}
          updateNotes={this.updateNotes.bind(this)}
          updateTranscription={this.updateTranscription.bind(this)}
          page={i + 1}
          notes={this.props.item[`notes${i + 1}`]}
          transcription={this.props.item.suggestion[`text${i + 1}`]}
        />
      );
    }

    const manuscript = this.props.item.manuscript;

    return (
      <React.Fragment>
        <div>
          <div>
            <a href="/manuscripts">כתבי היד</a>
          </div>
          <div style={{ fontWeight: "bold" }}>
            {manuscript.heb_name || manuscript.eng_name} (
            {this.props.item.page.page_name})
          </div>
          <div>{manuscript.notes}</div>
          <div style={{ fontSize: "10px" }}>
            {manuscript.shelf_no} |{" "}
            <a href={manuscript.external_url} target="_blank">
              מידע נוסף
            </a>
          </div>
        </div>
        <div style={{ display: "flex" }}>{transcriptionZones}</div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.goToPrevPage.bind(this)}
            >
              קודם
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={this.goToNextPage.bind(this)}
            >
              הבא
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.addTranscriptionZone.bind(this)}
            >
              הוסף איזור תעתוק לעמוד 2
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.sendTranscription.bind(this)}
            >
              שלח
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default TranscribeZoneWrapper;
