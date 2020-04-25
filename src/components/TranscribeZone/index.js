import React from "react";
import { TextareaAutosize, Button } from "@material-ui/core";
import api from "../../api";
import store from "../../Store";

const TranscribeZone = class Transcribe extends React.Component {
  constructor() {
    super();
    this.state = {
      transcription: null,
    };
  }

  updateTranscription(event) {
    this.setState({ transcription: event.target.value });
  }

  goToNextPage() {
    store.state.current_page_id = +store.state.current_page_id+1
  }

  sendTranscription() {
    const self = this;
    api
      .sendTranscription({
        transcriptionId: this.props.item.id,
        text: this.state.transcription,
      })
      .then((res) => {
        self.goToNextPage.call(self);
      });
  }

  componentWillMount() {
    this.setState({ transcription: this.props.item.transcription });
  }

  render() {
    const suggestion = this.props.item.suggestion.text;
    const manuscript = this.props.item.manuscript;
    
    return (
      <React.Fragment>
        <div>
          <div>
            <a href="/manuscripts">כתבי היד</a>
          </div>
          <div style={{ fontWeight: "bold" }}>
            {manuscript.heb_name || manuscript.eng_name} ({this.props.item.page.page_name})
          </div>
          <div>{manuscript.notes}</div>
          <div style={{ fontSize: "10px" }}>
            {manuscript.shelf_no} |{" "}
            <a href={manuscript.external_url} target="_blank">
              מידע נוסף
            </a>
          </div>
        </div>
        <div>
          <TextareaAutosize
            defaultValue={suggestion}
            onChange={this.updateTranscription.bind(this)}
            style={{ width: "100%", minHeight: "250px", fontSize:'14px' }}
            placeholder="קדימה, עזרו לנו להעשיר את ארון הספרים היהודי הדיגיטלי"
            style={{ textAlign: "right", width: "100%", height: "600px" }}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.goToNextPage.bind(this)}
            >
              עמוד הבא
            </Button>
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

export default TranscribeZone;
