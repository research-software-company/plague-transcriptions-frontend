import React from "react";
import { withRouter } from "react-router";
import { Grid, TextareaAutosize } from "@material-ui/core";
import TranscribeZone from "../TranscribeZone";
import api from "../../api";
import Navbar from "../Navbar";
import { timingSafeEqual } from "crypto";

const Transcribe = withRouter(
  class Transcribe extends React.Component {
    constructor() {
      super();
      this.seaDragon = null;
      this.state = {
        item: null,
      };
    }

    componentWillUnmount(){
        this.seaDragon.close()
    }

    componentDidMount() {
      const self = this;
      const pageId = this.props.match.params.pageId;

      let element = document.getElementById('image-container');
      
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

    render() {
      const item = this.state.item;

      const itemTranscribeZone = item ? <TranscribeZone item={item} /> : null;

      return (
        <React.Fragment>
          <Navbar />

          <div style={{ display: "flex", padding:'10px' }}>
            <div style={{ flex: 1,padding:'5px', backgroundColor:'#000'}}>
              <div
                id="image-container"
                style={{ width: "100%", height:'100%' }}
              ></div>
            </div>
            <div style={{ padding:'5px',flex: 1, textAlign: 'right' }}>{itemTranscribeZone}</div>
          </div>
        </React.Fragment>
      );
    }
  }
);

export default Transcribe;
