import React from "react";

import { TextareaAutosize, Button } from "@material-ui/core";

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

  sendTranscription() {
    debugger;
  }

  componentWillMount() {
    this.setState({ transcription: this.props.item.transcription });
  }

  render() {
    const suggestion = this.props.item.suggestion.text;
    const transcription = this.state.transcription;

    return (
      <React.Fragment>
        <div>
          <h2>שם כתב היד</h2>
          <div>מידע נוסף</div>
        </div>
        <div>
          <TextareaAutosize
            defaultValue={suggestion}
            onChange={this.updateTranscription.bind(this)}
            style={{ width: "100%", minHeight: "250px" }}
            placeholder="קדימה, עזרו לנו להעשיר את ארון הספרים היהודי הדיגיטלי"
            style={{textAlign:'right', width:'100%', height:'600px'}}
          />

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

export default TranscribeZone;
