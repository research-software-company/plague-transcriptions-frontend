import React from "react";
import { withRouter } from "react-router";
import TranscribeZoneWrapper from "../TranscribeZoneWrapper";
import api from "../../api";
import Navbar from "../Navbar";
import { observer } from "mobx-react";
import store from "../../Store";

const Transcribe = class Transcribe extends React.Component {
  constructor() {
    super();
    this.seaDragon = null;
    this.state = {
      item: null,
    };
  }

  updateItem(pageId) {
    if (this.seaDragon) {
      this.seaDragon.destroy()
    }

    const self = this;
    let element = document.getElementById("image-container");

    this.el = element;

    api.startTranscribing(pageId).then(async (res) => {
      const item = res && res.data && res.data.page && res.data;

      self.setState({ item }, function () {
        this.seaDragon = new window.OpenSeadragon({
          element: this.el,
          showRotationControl: true,
          gestureSettingsTouch: {
            pinchRotate: true,
          },
          tileSources: {
            type: "image",
            url: `${item.page.iiif_url}/full/full/0/default.jpg`,
          },
        });
      });
    });
  }

  componentWillUnmount() {
    this.seaDragon.close();
  }

  componentWillReceiveProps(props) {
    const self = this;
    const pageId = props.pageId;
    
    // Empty transcription in state
    this.setState({ item: null }, function () {
      self.updateItem(pageId);
    });
  }

  componentDidMount() {
    store.state.current_page_id = this.props.match.params.pageId;
  }

  render() {
    const item = this.state.item;
    const itemTranscribeZone = item ? <TranscribeZoneWrapper item={item} /> : null;

    return (
      <React.Fragment>
        <Navbar />

        <div style={{ display: "flex", padding: "10px" }}>
        <div style={{ padding: "5px", flex: 1, textAlign: "right" }}>
            {itemTranscribeZone}
          </div>
          <div style={{ flex: 1, padding: "5px", backgroundColor: "#000" }}>
            <div
              id="image-container"
              style={{ width: "100%", height: "100%" }}
            ></div>
          </div>
          
        </div>
      </React.Fragment>
    );
  }
};
export default observer(withRouter(Transcribe));
