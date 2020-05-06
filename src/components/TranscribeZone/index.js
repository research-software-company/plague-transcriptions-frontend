import React from "react";

const TranscribeZone = class TranscribeZone extends React.Component {
  updateTranscription(event) {
    this.props.updateTranscription(event.target.value, this.props.page);
  }

  updateNotes(event) {
    this.props.updateNotes(event.target.value, this.props.page);
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ paddingLeft: "5px" }}>
          <h3>עמוד</h3>
          <textarea
            defaultValue={this.props.suggestion}
            onChange={this.updateTranscription.bind(this)}
            style={{
              textAlign: "right",
              width: "100%",
              height: "250px",
              fontSize: "14px",
            }}
            placeholder="קדימה, עזרו לנו להעשיר את ארון הספרים היהודי הדיגיטלי"
          />

          <textarea
            defaultValue={this.props.notes}
            onChange={this.updateNotes.bind(this)}
            style={{
              textAlign: "right",
              width: "100%",
              height: "150px",
              fontSize: "14px",
            }}
            placeholder="הערות ותוספות"
          />
        </div>
      </React.Fragment>
    );
  }
};

export default TranscribeZone;
